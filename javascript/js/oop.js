class student{
    constructor(name){
       this.name=name
    }
}

class teacher extends student{
    constructor(name){
         super(name);
        console.log("Hi i'm Hritik");
        
    }
}

let a=new teacher("Hritik Pradhan")
console.log(a);