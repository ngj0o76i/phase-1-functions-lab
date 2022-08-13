// Code your solution in this file!
const distanceFromHqInBlocks = distant => distant > 42 ? distant - 42 : 42 - distant


const distanceFromHqInFeet = feet => distanceFromHqInBlocks(feet) * 264


const distanceTravelledInFeet = (start, destination) => {
  let travelled = destination - start;
  return start && destination > 42 ? travelled * 264 : Math.abs(travelled * 264)
}

const calculatesFarePrice = (start, destination) => {
  let travelled = distanceTravelledInFeet(start, destination);
  let surChargeCents = travelled - 400;
  // let surChargeDollars = travelled - 2000;
  if (travelled < 400) {
    return 0;
  } else if (travelled < 2000) {
    return surChargeCents * .02;
  } else if (travelled > 2000 && travelled < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}

// console.log(distanceFromHqInFeet(34));
// console.log(distanceTravelledInFeet(50, 60));
//  console.log (calculatesFarePrice(34,24));
