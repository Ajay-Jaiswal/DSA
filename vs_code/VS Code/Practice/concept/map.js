// let arr = ['1','2','a','b','1','1','2','b','2','2','c']
// let set = new Set(arr)
let arr = [2, 2, 1, 1, 1, 6]
let map = new Map()


// //-----------------------------------------------

for (let i of arr) {
    if (map.has(i))
        map.set(i, map.get(i) + 1)
    else
        map.set(i, 1)
}

let max =0;
for(let i of map.values()){
    if(i>max) max=i
}

for(let [key,value] of map.entries()){
    if(value == max) console.log(key)
}

console.log(map)


//  var arr =[1,2,3,0,5,6]
//  var i =0;
//  var ret =[]

//  function print(i,arr,ret){
//      if(i==arr.length) return console.log(ret);
//      ret[ret.length] =arr[i]
//      print(i+1,arr,ret)
// }
// print(i,arr,ret)



// 1 to 10 print
// var i=1;
// var arr =[]
// function xyz(i,arr){
//     if(i==11) return console.log(arr)
//     arr[arr.length] = i;
//     xyz(i+1,arr)
// }
// xyz(i,arr)


//---------------------------------------------------------


// var i=1;
// var arr =[]
// function xyz(i){
//     if(i==5) {
//         //console.log(i)
//         return
//     };
//     console.log(i);
//     xyz(i+1)
//     console.log(i);
// }
// xyz(i)


// //---------------------------------------------------------


// var i=1;
// var arr =[]
// function xyz(i,arr){
//     if(i==5) {
//         return console.log(arr)
//     };
//     arr.push(i);
//     xyz(i+1,arr)
//     arr.push(i);
// }
// xyz(i,arr)




// function fact(a) {
//     if (a > 1)
//         return a * fact(a - 1)
//     else
//         return 1
// }
// console.log(fact(5))

// let arr = [1,2,3,4,1,2,4,4,1,4,2,3,8,1,1,1]

// let set = new Set(arr)

// let map = new Map()


// for(let i of arr){
//     if(map.has(i))
//     map.set(i , map.get(i)+1)
//     else
//     map.set(i,1)
// }
// console.log(map)

// let max =0;
// for(let key of map.keys()){
//     if(key >max) max=key
// }

// for(let [key,value] of map.entries()){
//     if(key ==max) console.log(value)
// }






