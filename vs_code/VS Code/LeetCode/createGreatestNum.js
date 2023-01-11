let arr = [71,9,4,96,63,72]

let map = new Map()

for(let element of arr){
    if(element%10 == element){
        map.set(element,element)
    }
    else{
        element % 10
        map.set(element,0)
    }
}

console.log(map)