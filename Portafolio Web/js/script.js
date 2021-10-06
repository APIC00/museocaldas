let menuContent = document.querySelector('.menu');
var activador = true;

$(document).ready(function(){
  $('#slider').fadeIn('slow').delay(200);
  $("#sticker").sticky({topSpacing:0});
});

//https://dribbble.com/shots/3581904-HEALTHEX-Day-01

//SMOOTH SCROLL MENU
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {  
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        window.location.hash = hash;
      });
    }
  });
});

//FIXED MENU COLORS
$(document).ready(function(){
  $(window).trigger('scroll');
  $(window).bind('scroll', function () {
    var pixels = 50; //pixeles abajo
    if ($(window).scrollTop() > pixels) {
  $('.nav').addClass('fixed');
      $('.menu a').css({"color":"#354757"});
      $('.logo').css({"color":"#354757"});
    } else {
      $('.nav').removeClass('fixed');
      $('.menu a').css({"color":"#BABCBD"});
      $('.logo').css({"color":"#BABCBD"});
    }
  }); 
}); 
function Voz_inicio(){
  speechSynthesis.speak(new SpeechSynthesisUtterance("En esta seccion encontraras informacion sobre Francisco Jose de Caldas"))
}
function Voz_Trabajos(){
  speechSynthesis.speak(new SpeechSynthesisUtterance("En esta seccion encontrara informacion del museo"))
}
function Voz_contacto(){
  speechSynthesis.speak(new SpeechSynthesisUtterance("En esta seccion podras contactar con el museo"))
}
//Scroll Efect

 let prevScrollPos = window.pageYOffset;
 let goTop = document.querySelector('.go-top');

window.onscroll = () => {
  
  //Hide & Show - Scroll Menu (Function)
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    menuContent.style.top = '0px';
    menuContent.style.transition = '0.5s';
  }else{
    menuContent.style.top = '-60px';
    menuContent.style.transition = '0.5s';
  }
  prevScrollPos = currentScrollPos;
  
  //Scoll Menu & Go Top & See Down (Styles)
  let arriba = window.pageYOffset;

  //Conditions
  if(arriba <= 600){
    menuContent.style.borderBottom = 'none';

    //Ocultar Go Top
    goTop.style.right = '-100px';
  }else{
    menuContent.style.borderBottom = '3px solid #ff2e63';

    //Mostrar Go Top
    goTop.style.right = '0px';
  }
  
}






    
   