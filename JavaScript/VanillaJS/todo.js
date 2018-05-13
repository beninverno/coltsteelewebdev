var todo = [];
while (true) {
    var ans = prompt("What would you like to do?");
    if (ans === "new") {
        add();
    }
    else if (ans === "list") {
        list();
    }
    else if (ans === "quit") {
        break;
    }
}

function add() {
    addToList = prompt("What would you like to add to the list?");
    todo.push(addToList);
}

function list() {
    console.log(todo);
}