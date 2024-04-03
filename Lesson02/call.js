console.log(Roomba.model); // "Romba-1"
console.log(Roomba.isFull); // false
Roomba.startCleaning.call(Roomba);
const notARobot = {
    counterOfStarts: 10,
};
Roomba.startCleaning.call(notARobot);


const notARobot2 = {
    counterOfStarts: 10,
};
// Roomba.startCleaning.apply(notARobot2, [arg1, arg2, arg3]);


console.log(Roomba.model); // "Romba-1"
console.log(Roomba.isFull); // false
setTimeout(Roomba.startCleaning.bind(Roomba), 1000);
Roomba.isUVLampOn = true;
setTimeout(Roomba.switchUVLamp.bind(Roomba), 2000);
setTimeout(Roomba.goCharge.bind(Roomba), 3000);
