function squareOfStars(width) {
    let currentLine = 0;
    let square = '';

    while (currentLine < width) {
        let line = '';

        for (i = 0; i < width; i++) {
            if (i == width - 1) {
                line += '*'
            }
            else {
                line += '* '
            }
        }

        if (currentLine < width) {
            square += line + '\n';
        }
        else {
            square += line;
        }
        currentLine += 1;
    }

    return square;
}