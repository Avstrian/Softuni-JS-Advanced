function rectangle(width, height, color) {

    let colorFirstLetter = color[0].toUpperCase();
    color = color.slice(1);
    color = colorFirstLetter + color;

    const rect = {
        width,
        height,
        color,
    };

    rect.calcArea = () => {
        return rect.width * rect.height;
    }

    return rect;
}