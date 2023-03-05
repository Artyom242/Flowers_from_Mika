const but_AutoText = document.getElementById('start');
const el = document.getElementById('block-text');

but_AutoText.addEventListener('click', ()=>{
    setTimeout(()=>el.scrollIntoView({block: "center", inline: "center", behavior:'smooth'}),26000)
})
