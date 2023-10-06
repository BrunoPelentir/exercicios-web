function addItem() {
    var itemInput = document.getElementById("item");
    var itemText = itemInput.value.trim();

    if (itemText !== "") {
        var lista = document.getElementById("lista");
        var listItem = document.createElement("li");
        listItem.innerHTML = 
           ` ${itemText}
            <button onclick="removeItem(this)">Remover</button>
        `;
        lista.appendChild(listItem);
        itemInput.value = "";
    }
}

function removeItem(button) {
    var listItem = button.parentElement;
    var lista = document.getElementById("lista");
    lista.removeChild(listItem);
}