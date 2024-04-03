const Samba1 = new SambaRobot(1014778);
console.log(Samba1.serialNumber); // 1014778
console.log(Samba1.startCleaning());

const robots = [];
for (let index = 0; index < 10; index++) {
    robots.push(new SambaRobot(index));
}
console.log(robots[3].serialNumber); 
console.log(robots[7].serialNumber);

SambaRobot.prototype = DancingSeries;
const Samba2 = new SambaRobot(1014779);
console.log(Samba2.serialNumber); 
console.log(Samba2.startCleaning());