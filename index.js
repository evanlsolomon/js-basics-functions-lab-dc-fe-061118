// Code your solution in this file!
Hq = 42

function distanceFromHqInBlocks (pickUpLocation){
  return Math.abs(pickUpLocation - 42);
}

function distanceFromHqInFeet (pickUpLocation){
  return Math.abs(pickUpLocation - 42)*264;
}

function distanceTravelledInFeet (start, destination){
  return Math.abs(start - destination)*264;
}

function calculatesFarePrice(start, destination){
  if (distanceTravelledInFeet < 401){
    return 0
  }
}