const botaoMenu = document.querySelector('.botao__menu');
const menu = document.querySelector('.menu__lateral_mobile');

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')
})