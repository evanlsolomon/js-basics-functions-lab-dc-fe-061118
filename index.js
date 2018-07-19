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
  if ((Math.abs(start - destination)*264) < 401){
    return 0;
  } 
  else if ((Math.abs(start - destination)*264)>400 && (Math.abs(start - destination)*264)<2001){
    return (0.02*(Math.abs(start - destination)*264 - 400));
  }
  else if(((Math.abs(start - destination)*264)>2000 && Math.abs(start - destination)*264)<2501))
  return 25;
}