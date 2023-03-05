const but_text = document.getElementById('start');

const text_11 = document.getElementById('text-11');
const text_22 = document.getElementById('text-22');
const text_33 = document.getElementById('text-33');
const text_44 = document.getElementById('text-44');
const text_1 = document.getElementById('text-1');
const text_2 = document.getElementById('text-2');
const text_3 = document.getElementById('text-3');
const text_4 = document.getElementById('text-4');

but_text.addEventListener('click', ()=>{
    setTimeout(()=>text_11.scrollIntoView({block: "center", inline: "center", behavior:'smooth'}),74200)
    setTimeout(()=>text_22.scrollIntoView({block: "center", inline: "center", behavior:'smooth'}),75700)
    setTimeout(()=>text_33.scrollIntoView({block: "center", inline: "center", behavior:'smooth'}),78400)
    setTimeout(()=>text_44.scrollIntoView({block: "center", inline: "center", behavior:'smooth'}),82000)
    setTimeout(()=>text_1.scrollIntoView({block: "center", inline: "center", behavior:'smooth'}),85700)
    setTimeout(()=>text_2.scrollIntoView({block: "center", inline: "center", behavior:'smooth'}),87600)
    setTimeout(()=>text_3.scrollIntoView({block: "center", inline: "center", behavior:'smooth'}),90800)
    setTimeout(()=>text_4.scrollIntoView({block: "center", inline: "center", behavior:'smooth'}),93700)
})