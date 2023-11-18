const speedLimit = 70;
let x = Math.floor(1.3);

function checkSpeed(speed) {
    if (speed > speedLimit)
    return i++

    if (speed < speedLimit)
    return i++

    if (speedLimit < 12)
    return 'license suspended'

}

function gauge(i) {
let i = 0;
while (i <= 5) {
    if (i % 2 !== 0) console.log(i)
    i++;
    }   
}

function checkSpeed1(speed1) {
    const speedLimit = 70;
    const KmPerPoint = 5;

    if (speed1 < speedLimit + KmPerPoint)
        console.log('ok');
    else {
    // best practice to avoid indentation if we can 
        const points = Math.floor((speed1 - speedLimit) / KmPerPoint);
        if (points >= 12)
            console.log('license suspended');
        else 
            console.log('Points', points);
    }

}

function checkSpeed1(speed1) {
    const speedLimit = 70;
    const KmPerPoint = 5;

    if (speed1 < speedLimit + KmPerPoint){
        console.log('ok');
        return;
    }
    // best practice to avoid indentation if we can 
    const points = Math.floor((speed1 - speedLimit) / KmPerPoint);
    if (points >= 12)
        console.log('license suspended');
    else 
        console.log('Points', points);
    }

