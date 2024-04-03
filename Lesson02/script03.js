Roomba.startCleaning();
Roomba.startCleaning.call(Roomba);
Roomba.startCleaning.apply(Roomba);
const bindedMethod = Roomba.startCleaning.bind(Roomba);
bindedMethod();
setTimeout(Roomba.startCleaning.bind(Roomba), 1000);