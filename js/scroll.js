const str = document.getElementById('start');

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
