let counter = 0;
const amount = 1000;

const timerId = setInterval(() => {
    if (counter > amount) {
        clearInterval(timerId);
        console.log('End long calculations');
    }
    if (counter % 100 === 0) {
        console.log('working: ', counter);
    }
    const newDate = new Date(counter);
    counter++;
}, 0);
