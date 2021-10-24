//CLOSURE

function createProcessor() {
    let targetString = '';

    return {
        append,
        removeStart,
        removeEnd,
        print
    }

    function append(str) {
        targetString += str;
    }

    function removeStart(amount) {
        targetString = targetString.slice(amount);
    }

    function removeEnd(amount) {
        targetString = targetString.slice(0, -amount);
    }

    function print() {
        console.log(targetString);
    }

}