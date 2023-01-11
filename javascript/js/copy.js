const _= require('lodash')

//Normal Copy------------------------------------------------

//we are normally assigning the value of obj1 in obj2
//They Share Both Same Value Location
//So if we change value of obj2 it will automatically update the value of obj1

// let obj1={
//     name:"Hritik",
//     age:21
// }

// let obj2=obj1

// console.log(obj2)
// obj2.name="Lucky"

// console.log(obj2)
// console.log(obj1)


//Shwallow Copy---------------------------------------------
//By using spread operator im copying the obj1 data in obj2
//Now by using spread operator we can able to shwallow copy the obj1 in obj2
//The main catch here is if there is another object present inside the object then the both obj1 and obj2 share
//the same location for internal object present inside obj1

// let obj1 = {
//     name: "Hritik",
//     age: 21,
//     hobby: {
//         first: "Cricket",
//         second: "FootBall"
//     }
// }
// let obj2 = { ...obj1}
// console.log(obj2)
// obj2.name = "Lucky"
// console.log(obj2)
// console.log(obj1)  //it doesnot affect the value of obj1
// obj2.hobby.first="Game"
// console.log(obj2)
// //now if we print obj1 it will consist the first as "Game".
// console.log(obj1)

// let obj1={
//     name:"Hritik",
//     age:21,
//     hobby:{
//         first:"Cricket",
//         second:"FootBall"
//     }
// }
// //First Method Is We Can Simply itrate the value of obj1 and copy its value in obj2
// let obj2={}
// for(let [key,value] of Object.entries(obj1)){
//     obj2[key]=value
// }
// console.log(obj2)
// obj2.hobby.first="Game"
// console.log(obj2)
// console.log(obj1)


//DEEP COPY

//We Can Jsonstringify The Item Then simply jsonparsed it
//but if the obj1 consist any function then their would be some problem

//Or We Can Simply Use Lodash For Deep Copying the value

// let obj1={
//     name:"Hritik",
//     age:21,
//     hobby:{
//         first:"Cricket",
//         second:"FootBall"
//     },
//     add:function(){
//         return 
//     }
// }
// let obj2=_.cloneDeep(obj1)

// console.log(obj2)
// obj2.hobby.first="Chess"
// obj2.hobby.third="cricket"
// console.log(obj2)
// console.log(obj1)

// let obj2= JSON.parse(JSON.stringify(obj1))
// obj2.hobby.first="game"
// console.log(obj2)
// console.log(obj1)