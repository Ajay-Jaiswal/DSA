class BikeCompany{
    constructor(country,type){
        this.country = country,
        this.type = type
    }
}

class Bajaj extends BikeCompany{
    constructor(country,type,company,model){
        super(country,type),
        this.company=company,
        this.model = model
    }
}

class Pulser extends Bajaj{
    constructor(country,type,company,mileage,vers,CC){
        super(country,type,company,mileage);
        this.mileage=mileage
        this.CC = CC
        this.vers = vers
    }

    speed(){
        return `The speed of the ${this.model} bike is ${this.mileage}`
    }

    version(){
        return `The version of ${this.model} is ${this.vers}`
    }
}



let company = new BikeCompany("India","fuel");
let bajaj = new Bajaj("Bajaj","BS6");
let pulser = new Pulser(60,125,"Pulser125");

let pulser125 = new Pulser("India","fuel","pulser125","Bajaj",125,"V3");

console.log(pulser)
console.log(pulser125.version())
// console.log(apache160)
// console.log(apache200)

