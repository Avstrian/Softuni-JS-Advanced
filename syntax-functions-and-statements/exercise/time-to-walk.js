function getWalkTime(steps, footprintLength, speed) {
    let distance = steps * footprintLength
    let time = distance / (speed / 3.6)

    let hours = 0;
    let seconds = Math.round(time % 60);
    let minutes = Math.floor(time / 60);

    while (minutes >= 60) {
        minutes -= 60;
        hours += 1;
    }
    
    for (i = 500; i < distance; i+=500) {
        minutes += 1
        if (minutes == 60) {
            minutes = 0;
            hours += 1;
        }
    }

    let stringHours = String(hours)
    let stringMinutes = String(minutes)
    let stringSeconds = String(seconds)

    if (hours < 10) {
        stringHours = "0" + String(hours)  
    }
    if (minutes < 10) {
        stringMinutes = "0" + String(minutes)  
    }
    if (seconds < 10) {
        stringHours = "0" + String(seconds)  
    }


    console.log(`${stringHours}:${stringMinutes}:${stringSeconds}`)
    
}
