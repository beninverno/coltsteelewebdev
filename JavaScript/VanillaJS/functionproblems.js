function isEven(num) {
    return(num % 2 === 0);
}

function factorial(num) {
    var total = num
    for (i = num-1; i > 0; i--) {
            total *= i;
    }
    return(total);
}

function kebabToSnake(stringToReplace) {
    return(stringToReplace.replace(/-/g,"_"));
}