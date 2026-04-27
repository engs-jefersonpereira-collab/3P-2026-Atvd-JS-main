const input = document.getElementById("input");
const add = document.getElementById("add");
const lista = document.getElementById("lista");

add.onclick = function() {

    const li = document.createElement("li");
    li.textContent = input.value;

    const btn = document.createElement("button");
    btn.textContent = "Remover";

    btn.onclick = function(e) {
        e.stopPropagation();
        li.remove();
    }
    
    li.onclick = function() {
        if (li.style.textDecoration === "line-through") {
            li.style.textDecoration = "none";
        } else {
            li.style.textDecoration = "line-through";
        }
    }

    li.appendChild(btn);
    lista.appendChild(li);

    input.value = "";
}
