function walkTime(steps, footPrintLength, speed) {
    let distance = steps * footPrintLength;
    let addMin = Math.floor(distance / 500) * 60;
    let time = ((distance / (speed * 1000)) * 3600) + addMin;

    let hours = Math.floor(time / 3600);
    let mins = Math.floor(time / 60);
    let sec = Math.round(time % 60);

    return(`${hours < 10 ? '0' : ''}${hours}:${mins < 10 ? '0' : ''}${mins}:${sec < 10 ?'0':''}${sec}`);
}
console.log(walkTime(4000, 0.60, 5));
console.log(walkTime(2564, 0.70, 5.5)); 
