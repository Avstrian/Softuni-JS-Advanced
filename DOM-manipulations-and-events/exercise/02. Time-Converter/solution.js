function attachEventsListeners() {
    const buttons = Array
        .from(document.querySelectorAll('input[type="button"]'))
        .forEach(button => button.addEventListener('click', onClick));
    

    function onClick(ev) {
        const value = Number(ev.target.parentNode.children[1].value);
        const targetId = (ev.target.id);
        const converted = timeConverter(targetId, value);
        const fields = Array.from(document.querySelectorAll('input[type="text"]'))
        
        let i = 0;
        for (let field of fields) {
            if (!field.value) {
                field.value = converted[i];
            }
            i += 1
        }
    }

    function timeConverter(id, value) {
        if (id == 'daysBtn') {
            days = value;
            hours = days * 24;
            minutes = hours * 60;
            seconds = minutes * 60; 
        }
        else if (id == 'hoursBtn') {
            hours = value;
            days = hours / 24;
            minutes = hours * 60;
            seconds = minutes * 60; 
        }
        else if (id == 'minutesBtn') {
            minutes = value;
            hours = minutes / 60;
            days = hours / 24;
            seconds = minutes * 60; 
        }
        else {
            seconds = value;
            minutes = seconds / 60;
            hours = minutes / 60; 
            days = hours / 24;
        }

        return [days, hours, minutes, seconds]
    }
}