//Difference Between CallBack , Promises And Async & Await

const data = ["Hritik", "Lucky"]

function getName() {
    setTimeout(() => {
        console.log(data)
    }, 1000);
}
// getName();

// function createName(a) {
//     setTimeout(() => {
//         data.push(a)
//     }, 4000);
// }
// createName("Priyanka");


//callBack-----------------------------------------------------
//We Are Calling The getName() After Completion Of createName();

// function createName(a,callback) {
//     setTimeout(() => {
//         data.push(a);
//         callback();
//     }, 2000);
// }
// createName("Priyanka", getName);

//PROMISES-----------------------------------------------------
//We Create A Promise By Using A Constructer,By Taking 2 function As Parameter
//1.resolve()-It runs if everything is fine
//2.reject()-it runs if there is any error

//To Get The Resolve Part We Use .then()
//To Get The Reject Part We simply Use .catch()

// function createName(a){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             data.push(a);
//             let error=false
//             if(!error){
//                 resolve()
//             }else{
//                 reject("Their Is Some Error")
//             }
//         }, 2000);
//     })
// }

// createName("harish").then(getName).catch(error =>console.log(error));

//Async & Await
//Asynchronous function doesnot wait

// async function start(){
//     await createName("wow");
//     getName();
// }
// start();