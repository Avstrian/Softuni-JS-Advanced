function sameNumbers(integer) {
    let stringedNumber = String(integer);
    let firstNumber = stringedNumber[1];
    let sameNums = true;
    let sumResult = 0;

    if (stringedNumber.length > 1) { 
        for (i = 0; i < stringedNumber.length; i++) {
            sumResult += Number(stringedNumber[i]);
            if (stringedNumber[i] != firstNumber) {
                sameNums = false;
            }
        }
    }

    else {
        sumResult += integer
    }

    console.log(sameNums);
    console.log(sumResult);
}