function cookingByNumbers(num, op1, op2, op3, op4, op5, op6) {
    let result = Number(num);
    let list = Array(op1, op2, op3, op4, op5, op6);

    for (i=0; i <= list.length; i++) {
        if (list[i] == 'chop') {
            result /= 2;
            console.log(result);
        }
        else if (list[i] == 'dice') {
            result = Math.sqrt(result);
            console.log(result);
        }
        else if (list[i] == 'spice') {
            result += 1;
            console.log(result);
        }
        else if (list[i] == 'bake') {
            result *= 3;
            console.log(result);
        }
        else if (list[i] == 'fillet') {
            result *= 0.80;
            console.log(result);
        }
    }
}
