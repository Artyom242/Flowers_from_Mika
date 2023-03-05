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
                const foot = document.getElementById('footer');
                block_t.classList.add('active');
                if(block_t.classList.contains('active')){
                    setTimeout(()=>el.scrollIntoView({block: "center", inline: "center", behavior:'smooth'}),4800)
                };
                if(foot.classList.contains('footer')){
                    setTimeout(()=>foot.scrollIntoView({block: "center", inline: "center", behavior:'smooth'}),76000)
                };
            }
        })
    });
} )
