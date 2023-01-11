//[1,2,3,4,5]
let i=0;
let res=[]
function abc(res,i){
    if(res.length==10){
        return console.log(res)
    }
    res[res.length]=i
    abc(res,i+1)
}
abc(res,1)