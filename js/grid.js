const but_grid = document.getElementById('start');
const grid = document.getElementById('grid');

but_grid.addEventListener('click', ()=>{
    setTimeout(()=>grid.scrollIntoView({block: "center", inline: "center", behavior:'smooth'}),62000);
})
