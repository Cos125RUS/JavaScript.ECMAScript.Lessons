// const lastName = "Petrov";
// const getFullName = (firstName) => {
//     const fullName = firstName + ' ' + lastName;
//     console.log(fullName);
//     return fullName;
// };

// getFullName("Ivan");



const houses = [];
let i = 0;
while (i < 10) {
    let houseNumber = i;
    let house = function () { // функция «дом»
        console.log(houseNumber); // выводит номер дома
    };
    houses.push(house);
    i++;
}
houses[0](); // 0 — у нулевого дома номер 0
houses[7](); // 7 — и у седьмого дома номер 7
