var body = document.querySelector("body");
var button = document.querySelector("button");
var isPink = false;
button.addEventListener("click", function() {
    if (!(isPink)) {
        body.style = "background-color: pink";
        isPink = true;   
    }
    else {
        body.style = "background-color: ivory";
        isPink = false;
    }
});
