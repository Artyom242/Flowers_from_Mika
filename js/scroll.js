//кнопка
const str = document.getElementById('start');
const block_t = document.querySelector('block-text');
var text = false;
//функ-я слайдера
str.addEventListener('click', ()=>{
    $(document).ready(function(){
        var owl = $('.owl-carousel');
        owl.owlCarousel({
            items: 1,
            loop: false,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            autoplay: true,
            margin: 0,
            smartSpeed: 600,
            autoplayTimeout: 3100,
            rewind: false,
        });
        owl.on('changed.owl.carousel', function(event) {
            if(event.page.index==7){
                const el = document.getElementById('block-text');
                setTimeout(()=>el.scrollIntoView({block: "center", inline: "center", behavior:'smooth'}),5000)
                
                function writeTextByJS(id, text, speed) {
                    var ele = document.getElementById(id),
                        txt = text.join("").split("");
                        
                    var interval = setInterval(function () {
                        if (!txt[0]) {
                            return clearInterval(interval);
                        };
                        ele.innerHTML += txt.shift();
                    }, speed != undefined ? speed : 100);
                    return false;
                };
                writeTextByJS(
                    "demo",
                    [
                        "В этот прекрасный радостный весенний день поздравляю тебя с 8 марта! Желаю солнечного настроения, любви, вдохновения, радости и благополучия. Пусть каждый новый день расцветает ароматными нежными цветами, пусть тебя окружают добрые, отзывчивые люди. С праздником!",
                    ]
                )

            }
        })
    });
} )

const crug = document.getElementById('crug');
crug.scrollIntoView({block: "center", inline: "center", behavior:'smooth'});

/*
// функ-я скролла к другому боку
function ScrollToo(block){
    window.scroll({
        left:0,
        top: block.offsetTop,
        behavior:'smooth',
    });
}
*/