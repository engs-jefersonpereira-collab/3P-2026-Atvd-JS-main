const input = document.getElementById("input");
const lista = document.getElementById("lista");

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
lista.innerHTML = tarefas.map(t => <li>${t}</li>).join("");

document.getElementById("add").onclick = function() {
    if (input.value != "") {
        tarefas.push(input.value);
        localStorage.setItem("tarefas", JSON.stringify(tarefas));
        lista.innerHTML += <li>${input.value}</li>;
        input.value = "";
    }
}

lista.onclick = function(e) {
    if (e.target.tagName == "LI") {
        e.target.style.textDecoration =
            e.target.style.textDecoration == "line-through" ? "none" : "line-through";
    }
}