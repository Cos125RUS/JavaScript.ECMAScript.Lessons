const Stand = {
    model: "Stand-1",
    robots: ['Roomba-1', 'Tango-1', 'Samba-1', 'Roomba-2'],
    startTestingArrow: function () {
        console.log('Start testing...');
        this.robots.forEach((value) => {
            console.log('stand: ', this.model, 'is testing robot: ', value);
        });
    },
    startTestingClassic: function () {
        console.log('Start testing...');
        this.robots.forEach(function (value) {
            console.log('stand: ', this.model, 'is testing robot: ', value);
        });
    },
};
Stand.startTestingArrow();
Stand.startTestingClassic();