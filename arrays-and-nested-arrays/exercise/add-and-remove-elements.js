function addRemove(commands) {
    let result = 1;
    const resultArray = []

    for (let cmd of commands) {
        if (cmd == 'add') {
            resultArray.push(result);
        }
        else {
            if (resultArray.length > 0) {
                resultArray.pop();
            }
        }
        result += 1;
    }

    if (resultArray.length == 0) {
        console.log('Empty')
    }
    else {
        console.log(resultArray.join('\n'))
    }
}