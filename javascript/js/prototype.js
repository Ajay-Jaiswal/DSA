//PROTOTYPE INHERITANCE
//Simply We Can Say That If You Can Use Property Of One Class In An Other Class Is Known As Inheritance
//Due To Property Inheritance We Are Able To Use Some Property That Are Ready Made.
//like we are able to use pop().push() like ready made function in our array.

//eg:-
//Javascript all consist of object everything is derived from object

let obj = {
    name: "Hritik"
}
console.log(obj.name)//Expected output--->Hritik

//Lets Take Another Object
// let obj2={
//     age:21
// }
// console.log(obj2.age)//Expected output----->21

//Now Lets Say We Want to use The .name of obj in obje2 so In that case we need to use __proto__
//Lets see

let obj2 = {
    age: 21,
    __proto__: obj
}
console.log(obj2.name)

//so we can use it right so this is prototype inheritance
//if we write array.prototype it will show all proprty of it

//eg:-2

let data = {
    name: "Hritik",
    age: 21
}

//CONSTRUCTOR
class Obj {
    constructor(givenname) {
        this.name = givenname
    }
    //we can add prototype to our constructer
    //IMPORTANT- Never ever change the default object protype
    getname() {
        return this.name
    }
    static add(){
        console.log("hello static")
    }
}


let my = new Obj("Hritik")
console.log(my)
console.log(my.getname())
Obj.add();