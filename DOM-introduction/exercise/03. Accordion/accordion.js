function toggle() {
    const button = document.getElementsByClassName('button')[0];
    const extra = document.getElementById('extra');

    if (button.textContent == 'More'){
        extra.style.display = 'block';
        button.textContent = 'Less';
    }
    else if (button.textContent == 'Less') {
        extra.style.display = 'none';
        button.textContent = 'More';
    }
}