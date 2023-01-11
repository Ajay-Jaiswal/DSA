// count the number of repeat alphabets in a given string
let str ="geeksforgeesks"
function countRepeatChar(str){
    let obj={}
    for(let i=0; i<str.length;i++){
        if(obj[str[i]]){
            obj[str[i]]+=1
        }else{
            obj[str[i]]=1
        }
    }
    let count =0
    for(let key in obj){
        // console.log(key,obj[key])
        if(obj[key]>1){
            count++
        }
    }
    console.log(count)
}
countRepeatChar(str)