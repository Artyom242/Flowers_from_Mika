const but_AutoText = document.getElementById('start');
const el = document.getElementById('block-text');

but_AutoText.addEventListener('click', ()=>{
    setTimeout(()=>writeTextByJS(
        "demo",
        [
            "В этот прекрасный радостный весенний день поздравляю тебя с 8 марта🌷🌷🌷! Желаю солнечного настроения 🌤, любви❤️, вдохновения🏞, радости и благополучия💃. Пусть каждый новый день расцветает ароматными нежными цветами, пусть тебя окружают добрые, отзывчивые люди. С праздником 🌸🌺🌹💐🌼!",
        ]
    ),24000)
})


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