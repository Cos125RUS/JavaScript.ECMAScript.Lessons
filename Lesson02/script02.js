console.log(Roomba.model); // "Romba-1"
console.log(Roomba.isFull); // false
Roomba.startCleaning(); // 'I am cleaning... I have been started: 1 times.'
Roomba.isUVLampOn = true;
Roomba.switchUVLamp(); // 'UV lamp is not working.'
Roomba.goCharge(); // 'I am going to charge...'

console.log('--------------------------------');
console.log(Tango.model); // "Tango-1"
console.log(Tango.isFull); // false
Tango.startCleaning();
Tango.isUVLampOn = true;
Tango.switchUVLamp(); // 'UV lamp is not working.'
Tango.goCharge();

console.log('--------------------------------');
console.log(Samba.model); // "Samba-1"
console.log(Samba.isFull); // false
Samba.startCleaning = Roomba.startCleaning;
Samba.switchUVLamp = Roomba.switchUVLamp;
Samba.goCharge = Roomba.goCharge;
Samba.startCleaning();
Samba.isUVLampOn = true;
Samba.switchUVLamp(); // 'UV lamp is not working.'
Samba.goCharge(); // 'I am going to charge...'

// console.log('--------------------------------');
// console.log(Roomba.model); 
// console.log(Roomba.isFull); 
// setTimeout(Roomba.startCleaning, 1000);
// Roomba.isUVLampOn = true;
// setTimeout(Roomba.switchUVLamp, 2000);
// setTimeout(Roomba.goCharge, 3000);

console.log('--------------------------------');
console.log(Roomba.model); 
console.log(Roomba.isFull); 
setTimeout(function () {
    Roomba.startCleaning();
}, 1000);
Roomba.isUVLampOn = true;
setTimeout(function () {
    Roomba.switchUVLamp();
}, 2000);
setTimeout(function () {
    Roomba.goCharge();
}, 3000);
