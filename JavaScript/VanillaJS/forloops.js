for (var i = -10; i < 20; i++) {
    console.log(i);
    var element = document.getElementById("l1");
    element.innerHTML += (" " + i);

}

for (var i = 10; i < 41; i += 2) {
    console.log(i);
    var element = document.getElementById("l2");
    element.innerHTML += (" " + i);
}

for (var i = 301; i < 334; i += 2) {
    console.log(i);
    var element = document.getElementById("l3");
    element.innerHTML += (" " + i);
}

for (var i = 5; i < 51; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log(i);
        var element = document.getElementById("l4");
        element.innerHTML += (" " + i);
    }
}