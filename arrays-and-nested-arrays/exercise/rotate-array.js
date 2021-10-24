function rotateArray(array, times) {
    for (i = 0; i < times; i++) {
        array.unshift(array.pop())
    }
    console.log(array.join(' '))
}