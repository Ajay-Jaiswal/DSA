//write a js program to cyclicallly rotae an array - rotate (arr,d) that rotates arr by d elements
// if d =2; (sirf last wala element rotate ho)
// if rotes element by 2
// hum new arr use nhi krna hai
let arr = [12,3,6,2,9,11] // => [9,11,12,3,6,2]

// how to do 

//1. rotate entire arr(reverse) [11,9,2,6,3,12]

//fir d element rotate [9,11,2,6,3,12]

//fir baki element [9,11,12,3,6,2]

function reverse(arr){
    let i=0;
    let j=arr.length-1 //  5
    while(i<j){
        //keep swapping
        arr[i]=arr[i] +arr[j] //1+5 || 2+4
        arr[j]=arr[i] -arr[j] //6-5 || 6-4
        arr[i]=arr[i]-arr[j]  //6-1 || 6-2
        i++
        j--
    }
    return arr
}
const firstReversArr =reverse(arr);  //[11,9,2,6,3,12]
let secondReverse = reverse(firstReversArr.slice(0,2)); // [9,11]
let finalReverse = reverse(firstReversArr.slice(2)) // [12,3,6,2]

console.log(secondReverse.concat(finalReverse))


// if(k<a){
//     let secondReverse = reverse(firstReversArr.slice(0,2)); // [9,11]
//     let finalReverse = reverse(firstReversArr.slice(2)) // [12,3,6,2]
//     }
//     else if(k>a){
//         k=k%a
//     let secondReverse = reverse(firstReversArr.slice(0,2)); // [9,11]
//     let finalReverse = reverse(firstReversArr.slice(2)) // [12,3,6,2]
//     }


