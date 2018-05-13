function printReverse(array) {
    for (i = (array.length - 1); i >= 0; i--) {
        console.log(array[i]);
    }
}

function isUniform(array) {
    var baseLine = array[0];
    var trueFalse = true;
    array.forEach(function(element){
        if (element !== baseLine) {
            trueFalse = false;
        }
    });
    return trueFalse;
}

function sumArray(array) {
    var total = 0;
    array.forEach(function(element) {
        total += element;
    });
    return total;
}

function max(array) {
    var highest = 0;
    array.forEach(function(element){
        if (element > highest) {
            highest = element;
        }
    });
    return highest;
}