function carFactory(car) {
    if (car.power <= 90) {
        car.engine = {
            power: 90,
            volume: 1800
        };
        delete car.power;
    }
    else if (car.power <= 120) {
        car.engine = {
            power: 120,
            volume: 2400
        };
        delete car.power;
    }
    else {
        car.engine = {
            power: 200,
            volume: 3500
        };
        delete car.power;
    }

    car.carriage = {
        type: car.carriage,
        color: car.color
    }
    delete car.color;

    if (car.wheelsize % 2 == 0) {
        car.wheelsize -= 1
    }
    car.wheels = [car.wheelsize, car.wheelsize, car.wheelsize, car.wheelsize];
    delete car.wheelsize;

    return car;
}
