function speedLimit(speed, area) {
    let limitForArea;
    let drivingStatus;

    if (area == 'motorway') {
        limitForArea = 130
    }
    else if (area == 'interstate') {
        limitForArea = 90
    }
    else if (area == 'city') {
        limitForArea = 50
    }
    else {
        limitForArea = 20
    }


    if (speed <= limitForArea) {
        console.log(`Driving ${speed} km/h in a ${limitForArea} zone`)
    }
    else if (speed - limitForArea <= 20) {
        drivingStatus = 'speeding'
    }
    else if (20 < speed - limitForArea && speed - limitForArea <= 40) {
        drivingStatus = 'excessive speeding'
    }
    else {
        drivingStatus = 'reckless driving'
    }

    if (drivingStatus) {
        console.log(`The speed is ${speed - limitForArea} km/h faster than the allowed speed of ${limitForArea} - ${drivingStatus}`)
    }
}
