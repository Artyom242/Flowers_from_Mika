/*const str = document.getElementById('start');

str.addEventListener('click', ()=>{
    var $jq = jQuery.noConflict();
    $('.carusel').slick({   
        arrows: false,
        adaptiveHeight: true,
        infinite: false,
        autoplaySpeed: 2500,
        speed: 500,
        draggable: false,
        swipe: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        autoplay: true,
        fade: true,
        cssEase: 'linear'
    });
} )
*/


const str = document.getElementById('start');

str.addEventListener('click', ()=>{
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            items: 1,
            loop: false,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            rewind: true,
            autoplay: true,
            margin: 0,
            smartSpeed: 600,
            autoplayTimeout: 3100,
          });
      });
} )
