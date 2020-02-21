const person1 = {
    name: 'ada',
    job: 'gardener',
    age: 36
};

function createPerson (name, job, age){
    return {
        name,
        job,
        age
    };
}
const person2 = createPerson('maciek', 'painter', 86);

const person3 = Object.create(person1);
person3.name = 'tomek';
person3.job = 'chef';
person3.age = 28;

function Person(name, job, age){
    this.name = name;
    this.job = job;
    this.age = age;
}
const person4 = new Person('danuta', 'librarian', 57);

Object.setPrototypeOf(person1, Person.prototype);
Object.setPrototypeOf(person2, Person.prototype);

console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);


// do prototypu konstruktora Person dodajemy metodę, będzie ona dostępna dla wszystkich stworzonych obiektów, bo dopisaliśmy im prototyp konstruktora Person
Person.prototype.printVal = function (){
    Object.values(this).forEach(item => console.log(item));
};

person1.printVal();
person2.printVal();
person3.printVal();
person4.printVal();

//////////////////////////////////
console.log('///////////////////////');

function displayKeysAndValues (){
    Object.entries(this).forEach(item => console.log(item));
}

displayKeysAndValues.call(person1);
const maciekEntries = displayKeysAndValues.bind(person2);
maciekEntries();

//////////////////////////////////
console.log('///////////////////////');

function createObj (constructor, ...args) {
    const newObj = {};
    Object.setPrototypeOf(newObj, constructor.prototype);
    constructor.call(newObj, ...args);
    return newObj;
}

const person5 = createObj(Person, 'karol', 'dj');
console.log(person5);

//////////////////////////////////
console.log('///////////////////////');

class Animal {
    constructor(name, color, size){
        this.name = name;
        this.color = color;
        this.size = size;
        console.log(...arguments);
    }
}

const bat = new Animal('bat', 'black', 'small');
const frog = new Animal('frog', 'green', 'small');

//////////////////////////////////
console.log('///////////////////////');

class WaterAnimal {
    constructor( name, color ){
        this.name = name;
        this.color = color;
    }
    printName = () => {
        console.log(this.name);
    };
    static printName2 = () => {    // obiekty nie mają dostępu do metod statycznych
        console.log(this.color);
    };
}

const blueWhale = new WaterAnimal( 'blue wahle', 'blue' );
blueWhale.printName();
WaterAnimal.printName2();

//////////////////////////////////
console.log('///////////////////////');

const mainContent = document.getElementById('main-content');
const inputBox = document.getElementById('my-text');

class MyDiv {
    constructor(text){
        this.text = text;
        this.createDiv(this.text);
        inputBox.value = '';
    }
    createDiv = () => {
        const newDiv = document.createElement('div');
        newDiv.innerText = this.text;
        mainContent.appendChild(newDiv);
    }
}

function makeNewDiv (){
    return new MyDiv(inputBox.value);
}