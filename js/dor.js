const but = document.getElementById('start');
const crug = document.getElementById('crug');

but.addEventListener('click', ()=>{
    setTimeout(()=>crug.scrollIntoView({block: "center", inline: "center", behavior:'smooth'}),50000);
})
