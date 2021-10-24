function validityChecker(x1, y1, x2, y2) {
    let result;

    for (i = 0; i < 3; i++) {
        if (i == 0) {
            result = Math.sqrt((0 - x1) ** 2 + (0 - y1) ** 2);
            
            if (result == Math.round(result)) {
                console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
            }
            else {
                console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
            }
        }

        else if (i == 1) {
            result = Math.sqrt((0 - x2) ** 2 + (0 - y2) ** 2);

            if (result == Math.round(result)) {
                console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
            }
            else {
                console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
            }
        }

        else if (i == 2) {
            result = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

            if (result == Math.round(result)) {
                console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
            }
            else {
                console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
            }
        }
    }
}