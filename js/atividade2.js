const texto = document.getElementById("texto");
const cor = document.getElementById("cor");
const fundo = document.getElementById("fundo");
const modo = document.getElementById("modo");

cor.onclick = function() {
    texto.style.color = "blue";
}

fundo.onclick = function() {
    document.body.style.backgroundColor = "yellow";
}

let escuro = false;

modo.onclick = function() {
    if (escuro) {
        document.body.style.backgroundColor = "blue";
        texto.style.color = "black";
    } else {
        document.body.style.backgroundColor = "rose";
        texto.style.color = "white";
    }
}