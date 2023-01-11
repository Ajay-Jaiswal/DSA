
function isPalindrome(str1){
    let str=str1.toLowerCase()
    let left=0
    let right=str.length-1
    if(left<right){
        if(str[left]===str[right]){
            return isPalindrome(str.slice(1,-1))
        }
        else{
            return false
        }
    }
    return true;
}
console.log(isPalindrome("abcdefedcba"))


// function isPalindrome(str){
//     let i=0;
//     let j=str.length-1;
//     while(i<j){
//         if(str[i]!==str[j]){
//             return false;
//         }else{
//             i++;
//             j--;
//         }
//     }return true;
// }
// console.log(isPalindrome("nsdsn"))





// 2
// function isPalindrome(str){
//     let arr=str.split("")
//     let arr2=[]
//     for(let i=arr.length-1;i>=0;i--)
//     {
//         arr2.push(arr[i])
//     }
//    let str1=arr2.join("")
//      if(str==str1){
//        return true
//      }else{
//        return false
//      }
//   }
  
//   const p=isPalindrome("banitinab")
//   console.log(p)
  




//3approach
// function isPalindrome(str){
//     let arr = str.split("");
//     console.log(arr)
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]!==arr[arr.length-1-i])
//         return false
//     }
//     return true;
// }
// console.log(isPalindrome("Nama"))



// let str = "jaj"
// // let str= str1.split(" ")
// function isP(str,i,j){
// if(i<j){
//     if(str[i]===str[j]){
        
//       return  isP(str,i+1,j-1)
//     }
//     return false
// }
// return true;
// }
// console.log(isP(str,0,str.length-1))




// const isPalindrome= (str)=>{
//     let arr = str.split("")
//     let arr2 = [];
    
//     for(let i=arr.length-1;i>=0;i--){
//         arr2.push(arr[i])
//     }
//     let str2= arr2.join("")
//     console.log(str2)
//     if(str2===str){
//         return true
//     }
//     return false
// }
// console.log(isPalindrome("naman"))