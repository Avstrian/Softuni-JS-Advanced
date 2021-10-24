'use strict';

function circleArea(parameter) {
    let result;
    if (typeof(parameter) == 'number') {
        result = parameter * parameter * Math.PI;
        console.log(result.toFixed(2));
    }
    else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(parameter)}.`);
    }
}
