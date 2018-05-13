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

    else if (ans === "delete") {
        deleteFromList();
    }
}

function add() {
    addToList = prompt("What would you like to add to the list?");
    todo.push(addToList);
    console.log(addToList + " added to the list.")
}

function list() {
    console.log("***********");
    todo.forEach(function(todoPrint) {
        console.log(todo.indexOf(todoPrint) + ". " + todoPrint)
    })
    console.log("***********")
}

function deleteFromList() {
    var deleteList = prompt("What would you like to delete from the list?");
    var index = todo.indexOf(deleteList);
    if (index > -1) {
        todo.splice(index, 1);
    }
}