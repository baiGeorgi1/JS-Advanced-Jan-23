class Person {
    constructor(firstName, secondName, age, email) {
        this.name = firstName;
        this.secondName = secondName;
        this.age = age;
        this.email = email;
    }
    toStirng() {
        return `${this.name} ${this.secondName}`
    }
}
let anna = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
let softUni = new Person('SoftUni');
let stephan = new Person('Stephan', 'Johnson', 25);

console.log(anna.toString())