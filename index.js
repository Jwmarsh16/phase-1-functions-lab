
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    const distance = Math.abs(pickupLocation - hqLocation);
    return distance;
}


function distanceFromHqInFeet(pickupLocation) {
    const hqLocation = 42;
    const feetInBlock = 264; 

    const distanceInBlocks = Math.abs(pickupLocation - hqLocation);
    const distanceInFeet = distanceInBlocks * feetInBlock;

    return distanceInFeet;
}


function distanceTravelledInFeet(startBlock, endBlock) {
    const feetInBlock = 264;

    const distanceInBlocks = Math.abs(endBlock - startBlock);
    const distanceInFeet = distanceInBlocks * feetInBlock;

    return distanceInFeet;
}


function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);

    if (distanceInFeet <= 400) {
        return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        const fare = (distanceInFeet - 400) * 0.02;
        return fare;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return 25; 
    } else {
        return 'cannot travel that far';
    }
}

