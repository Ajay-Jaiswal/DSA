// function missingNumber(arr){
//    let y = arr.sort((a,b)=> a+b)
//    for(let i=0;i<arr.length;i++){
//     var c = 0
//     if(y[i+1]-y[i] !== 1){
//         c = y[i] +1
//     }
//    }
//    return c
// }

// console.log(missingNumber([1,2,3,4,5,7,8,9]))


// function duplicate(arr){
//     let map = {}
//     for(let i=0;i<arr.length;i++){
//         if(map[arr[i]] === undefined){
//             map[arr[i]] = 1
//         }
//         else{
//             map[arr[i]] += 1
//         }
//         var array = []
//         if(map[arr[i]] !==1){
//             array.push(arr[i])
//         }
//     }
//     return array
// }
// console.log(duplicate([1,2,3,4,5,7,8,9,8]))

/*let b = arr.length -1
   let c = arr[b] * (arr[b]+1)
   let d = c/2
   let sum = 0
   for(let i=0;i<b;i++){
    sum += arr[i]
   }
   let y = sum - d

   return y*/ 
   /*
   function nextPermutation(N) {
    N=String(N).split("")
    
    let n = N.length;
    
    for(let i = n - 1; i >= 0; i--) {
        if(N[i] < N[i + 1]) {
            for(let j = n - 1; j > i; j--) {
                if(N[j] > N[i]) {
                    [N[i], N[j]] = [N[j], N[i]];
                    let right = [...N.slice(i + 1).reverse()];
                    let idx = 0;
                    
                    for(let k = i + 1; k < n; k++) {
                        N[k] = right[idx++];
                    }
                    
                    return N.join("");
                    
                }
            }
        }
    }
    
    N= N.reverse()
    
  return N.join("")

};

console.log(nextPermutation(524976))*/

//console.log((parseInt(Math.random()*(10**16))).toString(36))
//Have the function largest four (arr) take the array of integers stored in arr and find the four largest elements and return their sum.for example: arr is [4,5,-2,3,1,2,6,6] then the four largest elements in this is 6,6,4,5 total sum is 21?

// function largest(a){
//     let i, j, temp, n=a.length;

//     for(i=0; i<n-1; i++)
    
//     {for(j=i+1; j<n; j++)
    
//     {if(a[i] < a[j])
    
//     {temp=a[i];
    
//     a[i]=a[j];
    
//     a[j]=temp;
    
//     }
    
//     }
    
//     }
    
//     // Now return sum of first 4 in the Array
    
//     let sum=0;
    
//     for(i=0; i<4; i++)
    
//     { sum+=a[i];
    
//     }
    
//     return sum;
// }

// console.log(largest([4,5,-2,3,1,2,6,6]))

// let arr = [1,2,3,4,5,7,8,9]
// function call(arr,a){
//    let k = a%arr.length
//     let left = 0
//     let right = arr.length-1
//     while(left<right){
//         [arr[left],arr[right]] = [arr[right],arr[left]]
//         left++
//         right--
//     }
//     let l = k+1
//     let r = arr.length-1
//     while(l<r){
//         [arr[l],arr[r]] = [arr[r],arr[l]]
//         l++
//         r--
//     }
//     let le = 0
//     let ri = k
//     while(le<ri){
//         [arr[le],arr[ri]] = [arr[ri],arr[le]]
//         le++
//         ri--
//     }
//     return arr
// }

// console.log(call(arr,10))

let arr = ["ram", "sham", "ghan", "ram", "sham", "ram", "ghan","ghan","ram","sham"]

function map(arr){
    const obj = {}
    for(let i=0;i<arr.length;i++){
        if(obj[arr[i]] === undefined){
            obj[arr[i]] = 1
        }else{
            obj[arr[i]] += 1
        }
        var ma = 0
        var max = 0
        if(ma<obj[arr[i]] ){
            ma = arr[i] 
            max = ma
        }
    }
    return ma
}
console.log(map(arr))