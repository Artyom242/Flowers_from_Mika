
document.getElementById('start').onclick = slider;
setInterval (autoSlide,1000);
autoSlide();
var top = 0;
var timer; 

function autoSlide(){
    timer = setInterval (slider,1000);
}

function slider(){
    var polosa = document.getElementById('sliders');
    top = top.offsetTop;
    polosa.style.top = top + 'px';
}
