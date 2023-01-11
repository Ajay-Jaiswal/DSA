// const str = "this is cat";
// const  arr = str.split(" ");
// // console.log(arr)
// function rev(arr){
//     let i=0;
//     let j=arr.length-1;
//     while(i<j){
        
//         arr[i]=arr[i].concat(arr[j])          
//         arr[j]= arr[i].slice(0,-arr[j].length)
//         arr[i]=arr[i].slice(arr[j].length) 
//         i++;
//         j--
//     }
//     return arr.join(" ")

// }
// console.log(rev(arr))

const str = "nasir jafar mausami funcitonup masai";
const  arr = str.split(" ");
// console.log(arr)
function rev(arr,i,j){
if(i<j){
    let temp =arr[i]
    arr[i]=arr[j]
    arr[j]=temp
    rev(arr,i+1,j-1)
}
return arr.join(" ")

}
console.log(rev(arr,0,arr.length-1));

