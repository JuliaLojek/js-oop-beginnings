
// const person = {
//     name: 'Adam',
//     job: 'front-end developer',
//     friends: [{
//         name: 'Michal',
//         job: 'medical student'
//         },
//         {
//         name: 'Rafał',
//         job: 'actor'
//         }
//     ]
// };

// const meAndFriends = [person, ...person.friends];
// console.log(meAndFriends);

const name = ["Adam", "Michał", "Rafał"];
const job = ["front-end developer", "medical student", "actor"];

// function createPerson(name, job){
//     return{
//         name,
//         job
//     }
// }
// const people = name.map((item, i) => createPerson(item, job[i]));
// console.log(people);

//////////////////

const person = {
    name: 'Adam',
    job: 'front-end developer',
    whatsYourName: function(){
        console.log('My name is: ' + this.name)
    }
};

// function createPerson(name, job){
//     const newObj = Object.create(person);
//     newObj.name = name;
//     newObj.job = job;
//     return newObj;
// }

// const newPeople = name.map((item, i) => createPerson(item, job[i]));
// console.log(newPeople);
// newPeople.forEach( item => item.whatsYourName() );

function Person(name, job){
    this.name = name,
    this.job = job,
    this.whatsYourName = function(){
        console.log('My name is: ' + this.name)
    }
}

// const people = name.map( (item, i) => new Person(item, job[i]) );
// console.log(people);

const julia = new Person('julia', 'student');
const maria = new Person('maria', 'artist');

julia.friend = 'frania';
Person.prototype.friend = 'basia';

console.log(julia.friend);             // frania
console.log(julia.__proto__.friend);   // basia
console.log(maria.friend);             // basia

///////////////

const obj = {
    name: 'JEDEN',
    callMe: function(){
        console.log(this.name);
    },
    obj: {
        name: 'DWA',
        callMe: function(){
            console.log(this.name);
        }
    }
}
obj.callMe();
obj.obj.callMe();

// const obj2 = {
//     name: 'JEDEN',
//     callMe: function(){
//         function callMe2(){          // callMe2 należy do funkcji callMe, a nie do obiektu obj2
//             console.log(this.name);
//         }
//         callMe2();
//     }
// }
// obj2.callMe();     // nic się nie wyloguje

const obj2 = {
    name: 'JEDEN',
    callMe: function(){
        function callMe2(){
            console.log(this.name);
        }
        callMe2.call(this);    // dla wywołania this ma być tym, czym jest dla callMe, czyli obj2
    }
}
obj2.callMe();

//////////////

const ala = new Person('ala', 'gardener');

function showValues(a, b){
    console.log(Object.values(this));
    console.log(a, b);
}

showValues.call(ala, 'cześć', 'halo');
showValues.apply(ala, ['hejka', 'witam']);

const showValuesAla = showValues.bind(ala, 'cześć');   // przypisuje do zmiennej nową funkcję i przypisuje jej na stałe wartość this i podane w bind() argumenty, resztę arumentów przekazujemy przy wywołaniu funkcji
showValuesAla('hej');

//////////// ręcznie napisana funkcja działająca jak słówko NEW

function createNew(constructor, ...args){
    const newPerson = {};
    Object.setPrototypeOf(newPerson, constructor.prototype);
    constructor.call(newPerson, ...args);
    return newPerson;
}

const ada = createNew(Person, 'ada', 'waitress');
console.log(ada);