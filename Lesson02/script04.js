const Roomba = new RobotVacuumCleaner();

console.log(Roomba.model); 
console.log(Roomba.isFull); 
setTimeout(Roomba.startCleaning, 1000);
Roomba.isUVLampOn = true;
setTimeout(Roomba.switchUVLamp, 2000);
setTimeout(Roomba.goCharge, 3000);
