function extractText() {
    let nodeItems = document.querySelectorAll("ul#items li");
    let textarea = document.querySelector("#result");

    for (let item of nodeItems) {
        textarea.value += item.textContent + '\n';
    }
}