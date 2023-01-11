

function productOfArray(array){
	if(array.length === 0) return 1;

	return array.shift() * productOfArray(array);
}

let sixty = productOfArray([1,2,3,10]) // 60

console.log(sixty);



// by sadab 
// function productOfArray(arr,index){
//     if(index===0){
//         return arr[0]
//     }
//     return arr[index-1]*productOfArray[arr, index-1]
// }
// console.log(productOfArray([1,5,4,3,2],5))