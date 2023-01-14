function radar(speed, area) {
    let limit = 0;
    let status = '';
    const currentSpeed = speed;
    const areaType={
        city:50,
        residential:20,
        interstate:90,
        motorway:130
    }
    
    const difference = speed - areaType[area];
    if ( difference <= 0) {
        return (`Driving ${speed} km/h in a ${areaType[area]} zone`);

    }
    if (difference > 0 && difference <= 20) {
        status = 'speeding'
    } else if (difference <= 40) {
        status = 'excessive speeding';
    } else if (difference > 40) {
        status = 'reckless driving';
    }
    return (`The speed is ${difference} km/h faster than the allowed speed of ${areaType[area]} - ${status}`);
}
console.log(radar(40, 'city')); 
console.log(radar(21, 'residential'));
console.log(radar(120, 'interstate'));
console.log(radar(200, 'motorway'));
