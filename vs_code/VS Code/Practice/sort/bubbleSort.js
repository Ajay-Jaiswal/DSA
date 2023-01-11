

function bubbleSort(a,b,arr){
    let i = b-2
    let temp;
    
    while(i>=0){
        let j =0;
        while(j<=i){
            
            if(a==1){
                if(arr[j]>arr[j+1]){
                    temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
                j++
            }
            
            if(a==-1){
                if(arr[j]<arr[j+1]){
                    temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
                j++
            }
        }
        i--
    }
    return arr
}let arr = [25,41,8,3,4]
let a = -1 //for ascending put 1 , for decending put -1
let b = arr.length


console.log(bubbleSort(a,b,arr))







// let a  = [2,3,4,6]
// let b = [...a]
// console.log(b)






// let x = function(){
//     let a  = 5;
//     let y = function(){
//         console.log(a)
//     }
//     y();
// }
// x();

// let z = function(){
//     console.log(a)
// }
// z();



// {1,2,3,4,5}            [1,2,3,5,4,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

// let str = "abcfdbac"
// let mid = parseInt(str.length / 2); 

// let lStr = str.slice(0, mid).split(''); 
// let rStr = str.slice(str.length-mid).split(''); 

// let map1 = new Map();
// let map2 = new Map();

// for(i=0;i<lStr.length;i++){
//     let freq =0;
//     for(j=0;j<lStr.length;j++){
//         if(lStr[i]==lStr[j]) freq++;
//     }
//     map1.set(lStr[i],freq)
// }

// for(i=rStr.length-mid;i<rStr.length;i++){
//     let freq =0;
//     for(j=rStr.length-mid;j<rStr.length;j++){
//         if(rStr[i]==rStr[j]) freq++;
//     }
//     map2.set(rStr[i],freq)
// }

// console.log(lStr)
// console.log(rStr)
// console.log(map1)
// console.log(map2)
