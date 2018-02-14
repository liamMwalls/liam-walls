
function autoType(elementClass, typingSpeed){
  var thhis = $(elementClass);

  thhis.css({
    "position": "relative",
    "display": "inline-block"
  });

  thhis.closest('.type-js').addClass('cursor');
  thhis = thhis.find(".text-js");
  var text = thhis.text().trim().split('');
  var amntOfChars = text.length;
  var newString = "";
  thhis.text("|");
  setTimeout(function(){
    thhis.css("opacity",1);
    thhis.prev().removeAttr("style");
    thhis.text("");
    for(var i = 0; i < amntOfChars; i++){
      (function(i,char){
        setTimeout(function() {        
          newString += char;
          thhis.text(newString);
        },i*typingSpeed);
      })(i+1,text[i]);
    }
  },1000);
}

$(document).ready(function(){
    setTimeout( function(){
          autoType(".type-js", 200);
    }, 200);
});

$('.btn_nav').click(function(e) {
  e.preventDefault();
  
  animateContent(this);
 });

function animateContent(btn, blog) {
  // animate content
  $('.page__style').addClass('animate_content');
  $('.page__description').fadeOut(100).delay(2800).fadeIn();

  setTimeout(function() {
    $('.page__style').removeClass('animate_content');
  }, 3200);

  //remove fadeIn class after 1500ms
  setTimeout(function() {
    $('.page__style').removeClass('fadeIn');
    $('.page__style').removeClass('loading');
  }, 1500);

  var $this = $(btn),
      page = $this.attr("data-attr-page"),
      href = $this.attr("href");

  if(blog) {
    href = "/#/blogs/blog/"
  }

  $('.active').removeClass('active');

  setTimeout(function() {
    $this.closest('.page__style').attr('class', 'page__style animate_content');
    $this.closest('.page__style').addClass(page);
    $this.addClass('active');
    $(page).addClass('fadeIn');
      window.location = href;
  }, 1500);
}

$(function(){
  var url = $(location).attr('href'),
    parts = url.split("/"),
    last_part = parts[parts.length-2];

    if(last_part == "#"){
      last_part = "home"
    }

    var last_part = last_part.toLowerCase();

    console.log(last_part);

    if(parts[parts.length-1] == "blog"){
      last_part = "blogs"
      window.location = "/#/blogs";
    }

    // if(last_part == "#") {
    //   $('.page__style').attr('class', 'page__style home');
    // } else {
    //   $('.page__style').attr('class', 'page__style ' + last_part);
    // }
    var pageLink = $('[data-attr-page=' + last_part +']');

    $('.page__style').attr('class', 'page__style loading ' + last_part);

    pageLink.addClass('active');

    setTimeout(function() {
      $('.page__style').removeClass('loading');
    }, 2200);
})