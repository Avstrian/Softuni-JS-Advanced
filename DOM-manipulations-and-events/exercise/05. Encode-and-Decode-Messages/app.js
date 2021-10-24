function encodeAndDecodeMessages() {
    const encodeButton = document.querySelector('#main div button');
    const decodeButton = document.querySelectorAll('#main div button')[1];

    encodeButton.addEventListener('click', encode);
    decodeButton.addEventListener('click', decode);

    function encode(ev) {
        const textArea = ev.target.parentElement.querySelector('textarea');
        const uneditedText = Array.from(textArea.value);
        const encodedText = [];
        
        for (let character of uneditedText) {
            let number = character.codePointAt(0);
            number++;
            let newChar = String.fromCharCode(number);
            encodedText.push(newChar);
        }

        document.getElementById('main').children[1]
                .querySelector('textarea').value = encodedText.join('');
        textArea.value = '';
            
    }

    function decode(ev) {
        const textArea = ev.target.parentElement.querySelector('textarea');
        const uneditedText = Array.from(textArea.value);
        const encodedText = [];
        
        for (let character of uneditedText) {
            let number = character.codePointAt(0);
            number--;
            let newChar = String.fromCharCode(number);
            encodedText.push(newChar);
        }
        textArea.value = encodedText.join('');

    }
}