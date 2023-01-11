

function sliding(arr,w){
    debugger
var result = [];
const deque =[];
let n =arr.length;
for(let i=0; i< w; i++){

    while(deque.length>0 && arr[i]>=deque[deque.length-1]){
        deque.pop()    //Removing element from last from deque which is less then in comming element
    }
    deque.push(i);
}
for(let i=w; i<n; i++){

    result.push(arr[deque[0]]);
    while(deque.length>0 && arr[i]>=deque[deque.length-1]){
        deque.pop()    //Removing element from last from deque which is less then in comming element
    }
    while(deque.length>0 && i-w >=deque[0]){
        deque.shift()    //Removing element from last from deque which is less then in comming element
    }
    deque.push(i);   //deque [5,4,3]  //Incoming element is 3 which is lesser then the last element present in side the que
}

result.push(arr[deque[0]]);  // last window front element is maximum 

return result
}

console.log(sliding([1,3,-1,-3,5,3,6,7],3))




 //2nd way for sliding window
 function findlargest(arr, num){
     // arr - num +1
     if(num>arr){
         return "array is less than num"
     }
     else{
         var max = 0
         for(let i=0;i<arr.length-num+1;i++){
             let temp = 0;
             for(let j=0;j<num;j++){
                 temp += arr[i+j]
             } 
             if(temp >max){
                 max = temp;
             }
         }
     }
     return max
 }

 console.log(findlargest([2,4,7,8,6,5,8,7,5,6,7], 3))

 // w1 = [1,3,-1] = 3
// w2 = [3,-1,-3] = 3
//w3 = [-1,-3,5] = 5
// w4 = [-3,5,3] = 5
// w5 = [5,3,6] = 6
// w6 = [3,6,7] = 7