// Map, Set, WeakSet, WeakMap

//Set===================================================================================================================
//It Contains Only Unique Values
//Object Constructor

let myarray = [1, 2, 3, 4]
let obj = new Set(myarray)
obj.add(5)
let object = { name: "Hritik" }
obj.add(object)//also we can use delete(),clear()
console.log(obj)
console.log(obj.has(10))//it checks that the givn value is present or not if not present it will return false else true

//Weak Set
//we can only store object in weak set
//it can not be itrated

let weakset=new WeakSet()
let thing={}
weakset.add(thing)
console.log(weakset)


//MAP===================================================================================================================
//key=>value

let map=new Map([['a1','ajay'],['a2','bikash']])
console.log(map)
map.set('a2','hritik')//it will overwrite the value of a2
console.log(map.get('a2'))//to get the value of a2

//Weak Map
//it can only store object
//values can not be ittrated

let weakmap=new WeakMap()
let box={}
weakmap.set(box)
console.log(weakmap)
console.log(weakmap.has(box))