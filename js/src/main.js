
function autoType(elementClass, typingSpeed){
    console.log("liam")
  var thhis = $(elementClass);
  console.log(thhis)
  thhis.css({
    "position": "relative",
    "display": "inline-block"
  });

  thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
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

$('.js-menu-button').on('click', function(){
    console.log("liam")
    var $this = $(this);

    if ($this.closest('.menu').hasClass('open')) {
        $this.closest('.menu').addClass('close')
        $this.closest('.menu').removeClass('open')
    } else {
        $this.closest('.menu').addClass('open')
        $this.closest('.menu').removeClass('close');
    }

    setTimeout( function(){
        $('.menu.close').removeClass('close')
    }, 500)
})
$('.menu-nav__link').on('click', function(){
    var $this = $(this);
        
    $this.closest('.menu').addClass('close')
    $this.closest('.menu').removeClass('open')

  setTimeout( function(){
        $('.menu.close').removeClass('close')
        autoType(".type-js", 200);
    }, 500)

})