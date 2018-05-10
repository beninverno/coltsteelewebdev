    var whileOneNum = -10;
    var whileTwoNum = 10;
    var whileThreeNum = 301;
    var whileFourNum = 5;

    while (whileOneNum <= 19) {
        console.log(whileOneNum);
        whileOneNum++;
    }

    while (whileTwoNum <= 40) {
        console.log(whileTwoNum);
        whileTwoNum += 2;
    }

    while (whileThreeNum <= 333) {
        console.log(whileThreeNum);
        whileThreeNum += 2;
    }

    while (whileFourNum <= 50) {
        if (whileFourNum % 5 === 0 && whileFourNum % 3 === 0) {
            console.log(whileFourNum);
        }
        whileFourNum++;
    }