const Roomba = {
    model: "Roomba-2",
    power: 200,
    batterySize: 2100,
    boxSize: 0.5,
    workTime: 45,
    counterOfStarts: 0,
    isFull: false,
    isObstacle: false,
    isUVLampOn: false,
    startCleaning: () => {
        this.counterOfStarts++;
        console.log('I am cleaning... I have started: ', this.counterOfStarts, 'times.');
    },
    goCharge: () => {
        console.log('I am going to charge...');
    },
    switchUVLamp: () => {
        this.isUVLampOn = !this.isUVLampOn;
        console.log(`UV lamp is ${this.isUVLampOn ? 'working' : 'not working'}.`);
    }
};
