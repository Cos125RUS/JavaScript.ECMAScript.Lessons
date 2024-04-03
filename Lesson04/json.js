const student = {
    name: 'Slava',
    surname: 'Belkin',
    age: 20,
    practice: {
        place: 'IKTG',
        hours: 47,
    }
};
console.log(JSON.stringify(student, null, 4));

console.log('--------------------------------');
console.log(JSON.parse('{"name": "Slava", "surname": "Belkin", "age": 20, "practice": {"place": "IKGT", "hours": 47}}'));

console.log('--------------------------------');
console.log(JSON.parse('["Belkin", "Ivanov", "Petrov"]')); 