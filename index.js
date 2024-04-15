/*
    Create a template using class syntax for creating a Candidate and store each candidate's name, votes.
*/

class Candidate {
    static totalCandidates = 0;
    static totalVotes = 0;

    // constructor: is a special method for creating and initializing an object created with a class.
    // it gets called when a new object is created for that class.
    // constructors are used to initialize the object's state, allocate memory.
    // instance variables are the variables that are created inside the constructor of the class.
    constructor(name) {
        this.name = name;
        this.votes = 0;
        Candidate.totalCandidates++;
    }

    // methods
    static getStatus() {
        return `Total number of Candidates: ${Candidate.totalCandidates}`;
    }
}

// create an object to the class Candidate
let candidateA = new Candidate("John Doe");
let candidateB = new Candidate("Jane Doe");
let candidateC = new Candidate("Jack Doe");

// print the objects
// console.log(candidateA);
// console.log(candidateB);

// // print the total number of candidates
// console.log(`Total number of candidates: ${Candidate.totalCandidates}`);

// console.log(Candidate.getStatus());

/*
    Exercise:

    1. Create a class called 'Person' with the following properties:
        - firstName
        - lastName
        - age
    2. Create a method called 'getFullName' that returns the full name of the person.
    3. Create a method called 'getAge' that returns the age of the person.
    4. Create a method called 'setAge' that sets the age of the person.
    5. Create a method called 'getDetails' that returns the full name and age of the person.
*/

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getAge() {
        return this.age;
    }

    setAge(age) {
        this.age = age;
    }

    getDetails() {
        return `Name: ${this.getFullName()}
Age: ${this.getAge()}`;
    }
}

let person1 = new Person('John', 'Doe', 25);

person1.setAge(50);

console.log(person1.getDetails());