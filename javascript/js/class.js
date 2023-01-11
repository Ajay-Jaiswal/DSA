class student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName() {
        return `your full name is ${this.firstName} ${this.lastName}`;
    }
}



let firstStudent = new student('colt', 'steel');
console.log(firstStudent.fullName())