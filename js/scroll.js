var arr = document.querySelectorAll('slider');
i=0;
function scrolTo(elem){
    window.scroll({
        left:0,
        top: elem.offsetTop,
        behavior: "smooth"
    })
}

