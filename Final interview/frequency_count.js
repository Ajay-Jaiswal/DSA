// maximum occurance in arr 
let arr = [1,2,3,4,5,6,7,8,9,3,3,3]
let freqObject = {};
let max_occurance = 0
for(let i=0;i<arr.length;i++){
    if(freqObject.hasOwnProperty(arr[i])){
        freqObject[arr[i]] +=1
        
    }
    else{
        freqObject[arr[i]]=1
        console.log(freqObject[arr[i]])
    }
    if(max_occurance < freqObject[arr[i]] ){
        max_occurance = freqObject[arr[i]];
        max_occurance_character = arr[i]
    }
}
console.log(max_occurance  + ' >>>>>>>>>>>> '+ max_occurance_character)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// mximum string occurance

let str = 'the act or fact of being unable to keep or maintain something or someone'
str = str.split(' ')

let freqObject_str = {};

let max_occurance_str = 0

for(let i=0;i<str.length;i++){
    
    if(freqObject_str.hasOwnProperty(str[i])){
        freqObject_str[str[i]] +=1
    }
    else{
        freqObject_str[str[i]]=1
    }
    if(max_occurance_str < freqObject_str[str[i]] ){
        max_occurance_str = freqObject_str[str[i]];
        max_occurance_str_character = str[i]
    }
}

console.log(max_occurance_str  + ' >>>>>>>>>>>> '+ max_occurance_str_character)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Sum of consecutive

function simpleMaxSumOfconsecutive(arr,k){
    if(arr.length<k){
        return;
    }
    let currMax = -Infinity;
    let totalSum =0, leftWs = 0

    for(let i=0;i<k;i++){
        totalSum += arr[i]
    }
    currMax=totalSum;
    for(let i=k;i<arr.length;i++){
        leftWs +=arr[i-k];
        totalSum += arr[i]
        if(totalSum - leftWs >currMax){
            currMax = totalSum - leftWs
        }
    }
    return currMax
}

console.log(simpleMaxSumOfconsecutive([11,14,51,2,8,285,1,5,4,24,4,2,584,0,28,41,68,474,65,41,],5))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////