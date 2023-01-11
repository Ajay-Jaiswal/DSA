// convert an array of numbers to array of string in such a way that if number was 1,2,3,4 then strings would have values like in 
// 1 : a in 2 : ab in 3 : abc e.g. [2,5] => ["ab", "abcde"]

function generateString(number){

    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let finalStr = "", currIndex = 0;
    while(currIndex < number){
        finalStr += alphabet[currIndex];
        currIndex++;
    }
  return finalStr;
}

function encodeNumberWithCharOpt(arr){

    let maxNumber = Math.max(...arr);
    let encodedArr = [''];
    for(let i=1; i<=maxNumber; i++){
        encodedArr.push(generateString(i));
    }
  console.log(encodedArr)
    for(let i=0; i<arr.length; i++){
        arr[i] = encodedArr[arr[i]];
    }
}

const temp = [2,5,3,4,5,6,1,7,26]
encodeNumberWithCharOpt(temp)
console.log(temp);

