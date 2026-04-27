const input = document.querySelector('#meuInput');
const botao = document.querySelector('#btnAdicionar');
const lista = document.querySelector('#minhaLista');

botao.addEventListener('click', () => {
    const texto = input.value;

    if (texto.trim() !== "") {
        
        const novoItem = document.createElement('li');
        novoItem.textContent = texto;

        lista.appendChild(novoItem);

        input.value = "";
        input.focus(); 
    } else {
        alert("Por favor, digite algo antes de adicionar!");
    }
});