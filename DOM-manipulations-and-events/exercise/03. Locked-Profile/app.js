function lockedProfile() {
    Array
        .from(document.querySelectorAll('.profile button'))
        .forEach(btn => btn.addEventListener('click', onClick));

    function onClick(ev) {
        const divInfo = Array
            .from(ev.target.parentElement.querySelectorAll('div'))
            .find(d => d.id.includes('HiddenFields'));
        
        const check = ev.target.parentElement.querySelectorAll('input[type="radio"]')[1];

        if (ev.target.textContent == 'Show more' && check.checked) {
            divInfo.style.display = 'block';
            ev.target.textContent = 'Hide it';
        } 
        else if (ev.target.textContent == 'Hide it' && check.checked) {
            divInfo.style.display = 'none';
            ev.target.textContent = 'Show more';
        }
    }
}