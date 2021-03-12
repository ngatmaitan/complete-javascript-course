// activiating strict mode
'use strict';

// functions
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const usDesc = describeCountry("United States", 33, "DC");
const japanDesc = describeCountry("Japan", 23, "Tokyo");
const koreaDesc = describeCountry("Korea", 21, "Seoul");
console.log(usDesc, japanDesc, koreaDesc);

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

// function declarations vs expressions
const usPercent1 = percentageOfWorld1(33);
const japanPercent1 = percentageOfWorld1(23);
const koreaPercent1 = percentageOfWorld1(21);
console.log(usPercent1, japanPercent1, koreaPercent1);

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

const usPercent2 = percentageOfWorld2(33);
const japanPercent2 = percentageOfWorld2(23);
const koreaPercent2 = percentageOfWorld2(21);
console.log(usPercent2, japanPercent2, koreaPercent2);

// arrow functions
const percentageOfWorld3 = (population) => (population / 7900) * 100;
const usPercent3 = percentageOfWorld3(33);
const japanPercent3 = percentageOfWorld3(23);
const koreaPercent3 = percentageOfWorld3(21);
console.log(usPercent3, japanPercent3, koreaPercent3);

// functions calling other functions
function describePopulation(country, population) {
    return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world`;
}
const usPopPercent = describePopulation("United States", 141);
const japanPopPercent = describePopulation("Japan", 23)
const koreaPopPercent = describePopulation("Korea", 21);
console.log(usPopPercent, japanPopPercent, koreaPopPercent);

// coding challenge 1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(avgDolphins, avgKoalas) {
    if ((avgDolphins >= avgKoalas) && (avgDolphins >= (avgKoalas * 2))) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else if ((avgDolphins <= avgKoalas) && (avgKoalas >= (avgDolphins * 2))) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log(`No one wins :c`);
    }
}

checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49));
checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));

// introduction to arrays
const populations = [33, 23, 141, 21];
console.log(populations.length === 4);
const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];
console.log(percentages);

//basic array operations (methods)
const neighbours = ['Canada', 'Mexico'];

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
    console.log(`Probably not a central European country :D`);
}

const indexOfCanada = neighbours.indexOf('Canada');
neighbours[indexOfCanada] = 'Not Canada';
console.log(neighbours);

// coding challenge 2
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]]
console.log(total);

// objects
const myCountry = {
    country: 'US',
    capital: 'DC',
    language: 'English',
    population: 33,
    neighbours: ['Canada', 'Mexico']
}

// dot vs bracket notation in video challenge
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: false,

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    descJonas: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
    }
}

console.log(
    `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
)

// dot vs bracket notation
console.log(
    `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
)
myCountry.population += 2;
console.log(myCountry);
myCountry['population'] -= 2;
console.log(myCountry);

// object methods in video challenge
console.log(jonas.descJonas());

// coding challenge 3
const john = {
    firstName: 'John',
    lastName: 'Smith',
    weightKg: 92,
    heightM: 1.95,

    calcBMI: function () {
        this.BMI = this.weightKg / (this.heightM ** 2)
        return this.BMI;
    }
}

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    weightKg: 78,
    heightM: 1.69,

    calcBMI: function () {
        this.BMI = this.weightKg / (this.heightM ** 2)
        return this.BMI;
    }
}

const johnsBMI = john.calcBMI();
const marksBMI = mark.calcBMI();
console.log(johnsBMI, marksBMI);

function checkBMI(bmi1, bmi2) {
    if (bmi1 > bmi2) {
        console.log(
            `${john.firstName} ${john.lastName}'s BMI (${john.BMI}) is higher than ${mark.firstName} ${mark.lastName}'s BMI (${mark.BMI}!)`
        )
    } else {
        console.log(
            `${mark.firstName} ${mark.lastName}'s BMI (${mark.BMI}) is higher than ${john.firstName} ${john.lastName}'s BMI (${john.BMI}!)`
        )
    }
}
checkBMI(john.BMI, mark.BMI);

//iteration: the for loop
for (let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting`);
}

// looping arrays, breaking and continuing
// const populations = [33, 23, 141, 21];
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2);

// looping backwards and loops in loops
const listofNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i < listofNeighbours.length; i++) {
    for (let y = 0; y < listofNeighbours[i].length; y++) {
        console.log(`Neighbor: ${listofNeighbours[i][y]}`);
    }
}

// while loop
let i = 0;
const percentages3 = [];
while (i < populations.length) {
    percentages3.push(percentageOfWorld1(populations[i]))
    i++;
}
console.log(percentages3);

// coding challenge 4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}

console.log(tips);
console.log(totals);

var sum = 0;
function calcAverage(arr) {
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage(totals));