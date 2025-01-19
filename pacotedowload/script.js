let hamburguer = document.querySelector('.conteudo-botao');

let navLink = document.querySelector('.nav-link');

hamburguer.addEventListener('click', ()=>{
    navLink.classList.toggle('ativar');
    hamburguer.classList.toggle('active')
})