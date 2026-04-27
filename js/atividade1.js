const titulo = document.getElementById('titulo');
const botao = document.querySelector('#botao');

botao.addEventListener('click', () => {
    titulo.innerText = 'Olá professor!';
});