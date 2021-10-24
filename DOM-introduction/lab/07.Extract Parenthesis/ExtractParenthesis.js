function extract(content) {
    const text = document.getElementById(content).textContent;
    let result = '';
    const matcher = /\((.+?)\)/g;

    let match = matcher.exec(text);
    while (match != null) {
        result += match[1];
        result += '; '
        match = matcher.exec(text);
    }

    return result;

}