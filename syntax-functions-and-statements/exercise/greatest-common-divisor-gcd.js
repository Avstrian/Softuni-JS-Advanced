function gcd(num1, num2) {
    let result;

    if (num2 > num1) {
        result = num2 % num1;

        while (result != 0) {
            num2 = num1;
            num1 = result;
            result = num2 % num1;
        }
        
        console.log(num1)
    }

    else if (num1 > num2) {
        result = num1 % num2;

        while (result != 0) {
            num1 = num2;
            num2 = result;
            result = num1 % num2;
        }

        console.log(num2)
    }

}