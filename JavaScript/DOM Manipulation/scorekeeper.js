var p1button = document.getElementById("p1");
var p2button = document.getElementById("p2");
var resetbutton = document.getElementById("reset");
var playingto = document.getElementById("playingto");
var playingtoinput = document.querySelector("input");
var gameover = false;
var endscore = 5;
var p1score = 0;
var p2score = 0;

playingtoinput.addEventListener("change", function () {
    playingto.innerText = playingtoinput.value;
    endscore = playingtoinput.value;
    reset();
})

p1button.addEventListener("click", function() {
    setScore(1);
});
p2button.addEventListener("click", function() {
    setScore(2);
});
resetbutton.addEventListener("click", function() {
    reset();
})

function reset() {
    p1score = -1;
    p2score = -1;
    gameover = false;
    setScore(1);
    setScore(2);
}
function setScore(buttonNum) {
    if (buttonNum === 1) {
        if (!gameover) {
            p1score += 1;
            document.getElementById("p1score").textContent = p1score;
        }    
    }
    else if (buttonNum === 2) {
        if (!gameover) {
            p2score += 1;
            document.getElementById("p2score").textContent = p2score;
        }
    }
    if (p2score >= endscore || p1score >= endscore) {
        gameover = true;
    }
}