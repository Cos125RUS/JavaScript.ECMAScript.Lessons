function SambaRobot(serailNumber) {
    this.serialNumber = serailNumber;
    this.model = "Samba-1";
    this.power = 250;
    this.batterySize = 2500;
    this.workTime = 50;

    this.__proto__ = DancingSeries;
}

