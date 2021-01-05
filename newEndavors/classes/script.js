/*
function User(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
}

const jeff = new User('Jeff', 30, 'jeff@gmail.com');
const sara = new User('Sara', 23, 'sara@gmail.com');
console.log(`${sara.age} years old Sara`);
*/

class User2 {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    increaseAge() {
        this.age += 1;
    }
    static staticMethod() {
        console.log('I am a static method');
    }

    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
}


const bob = new User2('Bob', 40, 'bob@gmail.com');
const troop = new User2('Troop', 83, 'troop@gmail.com');
console.log(`${troop.name} electronic mail is ${troop.email}`);

const jeffry = new User2('Jeffry', 30, 'jeffry@gmail.com');
jeffry.increaseAge();
console.log(jeffry.age);
jeffry.increaseAge();
console.log(jeffry.age);


//jeffry.staticMethod();
User2.staticMethod();

//get and set consoles
console.log(jeffry.name);
jeffry.name = 'Jim';
console.log(jeffry.name);

//Inheritance
class User {
    constructor(name, age, email) {
        this._name = name;
        this._age = age;
        this._email = email;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }
}

class Administrator extends User {
    constructor(name, age, email, role) {
        super(name, age, email);
        this._role = role;
    }
    get role() {
        return this._role;
    }
    set role(newRole) {
        this._role = newRole;
    }
}

const sara = new Administrator('Sara', 30, 'sara@gmail.com', 'RMD');
console.log(`${sara.name} working in our company as ${sara.role}`);