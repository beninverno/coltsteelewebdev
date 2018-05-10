var answer = prompt("Are we there yet?");
while (answer !== "yeah" && answer !== "yes") {
    if (answer.indexOf("yeah") !== -1 || answer.indexOf("yes") !== -1){
        break;
    }
    var answer = prompt("Are we there yet?");
}

alert("Yay, we made it!");