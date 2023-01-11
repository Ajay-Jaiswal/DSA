// Implemet this code
// const result = calc.add(10).multiply(5).subtract(30).divide(5)

class Calc{
    constructor(){
        this.total = 0
    }
    add(a){
        this.total = this.total+a;
        return this
    }
    multiply(a){
        this.total = this.total*a;
        return this
    }
    divide(a){
        this.total = this.total/a;
        return this
    }
    subtract(a){
        this.total = this.total-a;
        return this
    }
}

let calc1 = new Calc()
const result1 = calc1.add(20).multiply(5).subtract(50).divide(2)
console.log(result1.total)


// ****************************************************************************

const calc2={
    total : 0,
    add(a){
        this.total = this.total+a;
        return this
    },
    multiply(a){
        this.total = this.total*a;
        return this
    },
    divide(a){
        this.total = this.total/a;
        return this
    },
    subtract(a){
        this.total = this.total-a;
        return this
    }
}

const result2 = calc2.add(10).multiply(5).subtract(30).divide(5)
console.log(result2)
