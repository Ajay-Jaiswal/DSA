// // // function mul(a,b){
// // //     function mul1(){
// // //         return a*b
// // //     }
// // //     return mul1()
// // // }
// // // console.log(mul(5,5))


// // let mid = async (req,res,next)=>{


// // let data = amir;
// // req.abc = data
// //     next();
// // }

// // let mid2 = async (req,res,next)=>{


// // let data1 = req.abc
// //     next();
// // }

// // // for(i=0;i<=9;i++){
// // //     console.log(i)
// // // }
// // // console.log(i)

// // let a=10;
// // let b=10;
// // console.log(a==b)

// // let amir = {}
// // let object = new Object()
// // console.log(amir==object)




// // // console.log(amir == object)


// // // function multiply(a,b){
// // //     function multi(){
// // //         return a*b;
// // //     }
// // //     return multi();

// // // }
// // // console.log(multiply(3,4))

// // let mid = async function shariq(req,res,next){

// // let data = req.body
// // req.feild = data


// //     next()
// // }

// // let mid1 = async function shariq(req,res,next){


// // data

// //     next()
// // }





// // let a =10

// // function(a)




// // let aa = async function(req,res,next){

// //     let data = req.body
// //     req.field = data
// //     next()
// // }

// // let aaa = async function(req,res,next){

// //     req.field
// //     next()
// // }



// // let obj ={}
// // obj.name = aaaaa

// // let object = {}
// // let obj = new Object()

// // console.log(object === obj)

// // module.exports.xyz = async function(){

// // }



// // class Stack{
// //     constructor(){
// //         this.box = []
// //     }

// //     push(element){
// //         return this.box.push(element)
// //     }

// //     top(){
// //         return this.box[this.box.length-1]
// //     }

// //     pop(){
// //         return this.box.pop()
// //     }

// //     getMin(){
// //         let min = this.box[0];
// //         for(let i=0; i<this.box.length;i++){
// //             if(min>this.box[i]){
// //                 min = this.box[i];
// //             }
// //         }
// //         return min
// //     }
// // }

// // let stack = new Stack()
// // stack.push(100)
// // stack.push(20)
// // stack.push(30)
// // stack.push(40)
// // stack.push(50)

// // console.log("After adding any element :")
// // console.log(stack)

// // console.log(stack.top())

// // console.log(stack.getMin())

// // stack.pop()
// // console.log("After removing a element :")
// // console.log(stack)

// // let arr = [12, 2, 54, 34, 51, 21, 58, 12]

// // function merge(left, right) {
// //     let result = [];
// //     let i = 0, j = 0, k = 0;
// //     while (i < left.length && j < right.length) {
// //         if (left[i] < right[j]) result[k++] = left[i++];
// //         else result[k++] = right[j++];
// //     }
// //     for (; i < left.length; i++) { result[k++] = left[i] }
// //     for (; j < right.length; j++) { result[k++] = right[j] }
// //     return result;
// // }



// // function mergeSort(arr) {
// //     if (arr.length <= 1) return arr
// //     let mid = parseInt(arr.length / 2)
// //     let left = mergeSort(arr.slice(0, mid))
// //     let right = mergeSort(arr.slice(mid))
// //     return merge(left, right)
// // }

// // console.log(mergeSort(arr))


// // i =10;
// // console.log(i)

// // const arr = [[1,2,3],[1,2,4],[5,2,1],[0,8,9]]

// // for(let row =0;row<arr.length;row++){
// //     for(col=0;col<arr[row].length;col++){
// //         console.log(arr[row][col],row,col)
// //     }
// // }



//       //   0   1   2   3   4  5  6  7  8 
// var arr = [10, 16, 8, 12, 15, 6, 3, 9, 5]  //  [10, 16i, 8, 12, 15, 6, 3, 9, 5j] 
// function partition(l, h) {                 //  [10, 5, 8, 12i, 15, 6, 3, 9j, 16]
//     let pivot = arr[l];                    //  [10, 5, 8, 9, 15i, 6, 3j, 12, 16]
//     let i = l, j = h, temp;                //  [10, 5, 8, 9, 3i, 6j, 15i, 12, 16]
//     while (i < j) {                        //  [6, 5, 8, 9, 3i, 10j, 15i, 12, 16]
//         do {
//             i++
//         }
//         while (arr[i] <= pivot);

//         do {
//             j--
//         }
//         while (pivot < arr[j])

//         if (i < j) {
//             temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp
//         }
//     }
//     temp = arr[l];
//     arr[l] = arr[j];
//     arr[j] = temp

//     return j;
// }


// function quicksort(l, h) {
//     if (l < h) {
//         let j = partition(l, h)
//         quicksort(l, j);
//         quicksort(j + 1, h)
//     }
//     return arr
// }
// console.log(quicksort(0, arr.length))



// 12---> 15---> 6---> 3

// let linkedList = {
//    head:{ 
//        value : value,
//        next : {
//            value:value,
//            next:{

//            }
//        }
//    }
// }

// class Stack{
//     constructor(){
//         this.item = []
//     }

//     push(element){
//         return this.item.push(element)
//     }

//     pop(){
//         return this.item.pop()
//     }

// }

// let stack = new Stack()
// stack.push(10)
// stack.pop()

// console.log(stack)


// let arr = [3,1,2, 5,10, 7, 9]
// let primeArr = [];
// for (i = 0; i < arr.length; i++) {//-------------
//     let isprime = true;
//     // if(arr[i]==2){
//     //     // primeArr.push(arr[i])
//     // }
//     for (j = 2; j < arr[i]; j++) {//------------
//         if (arr[i] % j == 0) {
//             isprime = false;
//             break;
//         }

//     }

//     if (isprime == true) {
//         primeArr.push(arr[i])
//     }
// }

// console.log(primeArr)










