const MusicSeries = {
    model: "music series",
    power: 200,
    batterySize: 2100,
    boxSize: 0.5,
    workTime: 45,
    startWipe: function () {
        console.log('I am the method of MusicSeries');
        console.log('I am starting to wipe the floor...');
    },
    __proto__: VacuumCleaner,
};