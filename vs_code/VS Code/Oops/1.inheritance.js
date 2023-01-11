/* Approach 1*/

class Human {
    walk() {
        return "Human can work."
    }
    eat() {
        return "Human can eat."
    }
}
class Junaid extends Human {
    topper() {
        return "Junaid is the topper of function Up"
    }
}
class Amir extends Junaid {
    programmer() {
        return "Amir is a programmer."
    }
}

let human = new Human()
let junaid = new Junaid()
let amir = new Amir()


// console.log(amir.programmer())
// console.log(amir.topper())
// console.log(amir.walk())
// console.log(amir.eat())
// console.log("----------------------")


// console.log(junaid.topper())
// console.log(junaid.walk())
// console.log(junaid.eat())
// console.log("------------------------")


// console.log(human.walk())
// console.log(human.eat())



/*Approach 2*/


class College{
    constructor(cname,place){
        this.collegeName = cname
        this.place = place
    }
}

class Student extends College{
    constructor(cname,place,name,age,stream){
        super(cname,place)
        this.name = name,
        this.age = age,
        this.stream = stream
    }
}

class Info extends Student{
    constructor(cname,place,name,age,stream,gender,mobile){
        super(cname,place,name,age,stream)
        this.gender = gender,
        this.mobile = mobile
    }
}
// let collge = new College()
// let student = new Student("Amir",25,"CSE")
let info =new Info("Calcutta University","Salt Lake","Amir","25","CSE","Male","123456789")
console.log(info)









// class Student extends College{
//     constructor(cname,place,sname,age,stream){
//         super(cname,place)
//         this.studentName = sname,
//         this.age = age,
//         this.stream = stream
//     }
// }

// let student = new Student("Calcutta University","Kolkata","Amir Sohel Shaik",25,"CSE")
// console.log(student)
