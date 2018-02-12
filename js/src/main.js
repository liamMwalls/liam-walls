(function () {
    "use strict";

    // Build new Flickity slider for header area
    var elem = document.querySelector('.slider');
    var flkty = new Flickity(elem, {
        // options
        pageDots: false,
        wrapAround: true
    });
    Flickity.prototype.hasDragStarted = function (moveVector) {
        // start dragging after pointer has moved 3 pixels in either direction
        return !this.isTouchScrolling && Math.abs(moveVector.x) > 5;
    };

    // Impelment elmo scrolling animations
    var scrollLinks = new elmo({
        scrollSpeed: 1000,
        block: $('header nav ul'),
        targetOffset: 57,
        topTarget: $('body'),
        topOffset: $('header').height(),
        scrollCallBack: function () {
            $('nav ul').removeClass('show');
        },
        fix: $('header nav')
    });
    // Bind nav menu toggle button
    $('.navBtn').on('click.toggle', function (e) {
        e.preventDefault();
        $('nav ul').toggleClass('show');
    })
}());


$(document).ready(function () {
    $('body').addClass('loaded');

    $(window).scroll(function () {
        $('.fade_interaction').each(function () {
            var el = $(this);
            el.position();

            if ($('html').scrollTop() > (el.position().top - 500) || $('body').scrollTop() > (el.position().top - 500)) {
                el.addClass("fade");
            }
        });
    });
});

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var youtubePlayer; // Global var for youtube player

function onYouTubeIframeAPIReady() {
    var videoID = document.getElementsByClassName('hero-video-container')[0].attributes.getNamedItem('data-video-src').value;
    youtubePlayer = new YT.Player('hero-video', {
        height: '720',
        width: '1280',
        videoId: videoID,
        events: {
            'onReady': onPlayerReady
        }
    });
}
function onPlayerReady() {
    var image = document.querySelector('.hero-video-preview'),
      button = document.querySelector('.hero-video-container');

    image.addEventListener('click', hidePreview, false);
    button.addEventListener('click', hidePreview, false);
}

function hidePreview() {
    var image = document.querySelector('.hero-video-preview'),
      button = document.querySelector('.hero-video-container');

    image.style.display = 'none';
    button.className += ' active';
    youtubePlayer.playVideo();
}

function showHideLinks() {
    var icon = $('.socialLinkIcon');
    if (icon.hasClass('show')) {
        icon.removeClass('show');
    } else {
        icon.addClass(' show');
    }
}