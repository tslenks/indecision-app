class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years(s)`;
    }
}


class Student extends Person {
    constructor(name, age, major = 'Undecided') {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor()) {
            description += ` Their major is ${this.major}`;
        }
    }
}

class Traveler extends Person {
    constructor(name,age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if(this.hasLocation) {
            greeting = `${greeting} I'm visiting from ${this.homeLocation}`;
        }
        return greeting;
    }

}


const me  = new Person('Tslenks Chris', 24);
console.log('me', me.getGreeting());

const student = new Student('Andrew', 34, 'Javascript');
console.log('student', student.getGreeting());

const traveler = new Traveler('Michael Osborne', 24, 'Antananarivo');
console.log('traveler', traveler.getGreeting());

const traveler1 = new Traveler('Jordan', 46);
console.log('traveler1', traveler1.getGreeting());