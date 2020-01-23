// Const neves changes
const name = 'Max';
let age = 29;
const hasHobbies = true;

age = 30;

const summarizeUser = (userName, userAge, userHasHobby) => {
    return (
        'Name is ' +
        userName +
        ', age is ' +
        userAge +
        ' and the user has hobbies: ' +
        userHasHobby
    );
}

console.log(summarizeUser(name, age, hasHobbies));

// const add = (a, b) => {
//     return a + b;
// };

const add = (a, b) => a + b;

console.log(add(8, 9));
