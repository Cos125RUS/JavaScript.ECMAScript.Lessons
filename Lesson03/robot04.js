const Djaiv = {
    model: "Djaiv-1",
    power: 250,
    batterySize: 2500,
    workTime: 50,
    startCleaning: function () {
        this.counterOfStarts++;
        console.log('I am the method of Djaiv');
        console.log('I am Djaiv, and I am cleaning... I have been started: ', this.counterOfStarts, 'times.');
    },
    __proto__: DancingSeries,
};