const image = document.querySelector('#image');
const close = document.querySelector('#close');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const imginner = document.querySelector('#imginner');



image.addEventListener('click', ()=>{
    imginner.classList.remove('opacity-0 pointer-events-none scale-90')
})

close.addEventListener('click', ()=>{
    modal.classList.toggle('hidden')
})

closeicon.addEventListener('click', ()=>{
    modal.classList.toggle('hidden')
})


