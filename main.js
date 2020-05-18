const container = document.querySelector('.container');
var inputValue = document.querySelector('.input');
const add = document.querySelector('.add');

if (window.localStorage.getItem("todos") == undefined) {
    var todos = [];
    window.localStorage.setItem("todos", JSON.stringify(todos));
}

var todosEX = window.localStorage.getItem("todos");
var todos = JSON.parse(todosEX);


class item {
    constructor (name) {
        this.createItem(name);
    }

    createItem (name) {

        var itemBox = document.createElement('div');
        itemBox.classList.add('item');

        var input = document.createElement('input');
        input.type = "text";
        input.disabled = true;
        input.value = name;
        input.classList.add('item_input');


        var edit = document.createElement('button');
        edit.classList.add('edit');
        edit.innerHTML = "EDIT";
        edit.addEventListener('click', () => this.edit(input, name));


        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(edit);
    }

}

add.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if (e.which == 13) {
        check();
    }
})

function check() {
    if(inputValue.value != "") {
        new item(inputValue.value);
        todos.push(inputValue.value);
        window.localStorage.setItem("todos", JSON.stringify(todos));
        inputValue.value = "";
    }
}

for (var v = 0; v < todos.lenght; v++) {
    new item (todos[v]);
}

new item("JS");