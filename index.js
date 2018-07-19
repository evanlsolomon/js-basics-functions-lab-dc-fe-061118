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

function calculatesFarePrice(distanceTravelledInFeet){
  if (distanceTravelledInFeet < 401){
    return 0;
} 
  else if (distanceTravelledInFeet>400&&distanceTravelledInFeet<2001){
    return .02*(distanceTravelledInFeet-400)
}

}