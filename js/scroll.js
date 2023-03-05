//кнопка
const str = document.getElementById('start');
const block_t = document.getElementById('block-text');


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
                const text_11 = document.getElementById('text-11');
                const text_22 = document.getElementById('text-22');
                const text_33 = document.getElementById('text-33');
                const text_44 = document.getElementById('text-44');
                const text_1 = document.getElementById('text-1');
                const text_2 = document.getElementById('text-2');
                const text_3 = document.getElementById('text-3');
                const text_4 = document.getElementById('text-4');
                const foot = document.getElementById('footer');

                block_t.classList.add('active');

                if(block_t.classList.contains('active')){
                    setTimeout(()=>el.scrollIntoView({block: "center", inline: "center", behavior:'smooth'}),4800)
                    setTimeout(()=>text_11.scrollIntoView({block: "center", inline: "center", behavior:'smooth'}),53000)
                    setTimeout(()=>text_22.scrollIntoView({block: "center", inline: "center", behavior:'smooth'}),54500)
                    setTimeout(()=>text_33.scrollIntoView({block: "center", inline: "center", behavior:'smooth'}),56900)
                    setTimeout(()=>text_44.scrollIntoView({block: "center", inline: "center", behavior:'smooth'}),60000)
                    setTimeout(()=>text_1.scrollIntoView({block: "center", inline: "center", behavior:'smooth'}),64000)
                    setTimeout(()=>text_2.scrollIntoView({block: "center", inline: "center", behavior:'smooth'}),65500)
                    setTimeout(()=>text_3.scrollIntoView({block: "center", inline: "center", behavior:'smooth'}),69600)
                    setTimeout(()=>text_4.scrollIntoView({block: "center", inline: "center", behavior:'smooth'}),72400)
                };

                if(foot.classList.contains('footer')){
                    setTimeout(()=>foot.scrollIntoView({block: "center", inline: "center", behavior:'smooth'}),76000)
                };

                    function writeTextByJS(id, text, speed) {
                        var ele = document.getElementById(id),
                            txt = text.join("").split("");
                        var interval = setInterval(function () {
                            if (!txt[0]) {
                                return clearInterval(interval);
                            };
                            ele.innerHTML += txt.shift();
                        }, speed != undefined ? speed : 90);
                        return false;
                    };
                    writeTextByJS(
                        "demo",
                        [
                            "В этот прекрасный радостный весенний день поздравляю тебя с 8 марта🌷🌷🌷! Желаю солнечного настроения 🌤, любви❤️, вдохновения🏞, радости и благополучия💃. Пусть каждый новый день расцветает ароматными нежными цветами, пусть тебя окружают добрые, отзывчивые люди. С праздником 🌸🌺🌹💐🌼!",
                        ]
                    )
            }
        })
    });
} )
