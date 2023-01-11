let input = "Hello"
let arr = ["e","o"]
let res = []
for(let i=0;i<input.length;i++){
    if(!arr.includes(input[i])){
        res.push(input[i])
    }
}
console.log(res)