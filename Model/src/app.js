const modal = document.querySelector('#modal');
const close = document.querySelector('#close');
const closeicon = document.querySelector('#closeicon');
const btnclick = document.querySelector('#btnclick');


btnclick.addEventListener('click', ()=>{
    modal.classList.remove('hidden')
})

close.addEventListener('click', ()=>{
    modal.classList.toggle('hidden')
})

closeicon.addEventListener('click', ()=>{
    modal.classList.toggle('hidden')
})


