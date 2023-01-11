/***************************  Overloading  ***************************/
class Overloading{
    calculate(){
        let a=10;
        let b =20;
        let c;
        c=a+b;
        return c;
    }

    calculate(a,b){
        let c = a+b;
        return c;
    }

    calculate(a,b,c){
        let d = a*b + c
        return d
    }
}
let overloading = new Overloading()
console.log(overloading.calculate(10,30,40))




/***************************  Overriding  ***************************/

class Human{
    constructor(name){
        this.name = name
    }

    info(){
       console.log(`${this.name} is the topper in Function Up.`)
    }
}

class Junaid extends Human{
    info(){
        console.log(`${this.name} is a duffer in College.`)
        super.info()
    }

}


let junaid = new Junaid("Junaid")
junaid.info()