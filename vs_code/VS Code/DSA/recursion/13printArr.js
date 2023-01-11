var arr= [1,2,3,5]
var i= 0;
var ret = []
function print(i,arr,ret){
    if(i==arr.length) return console.log(ret)
    ret[ret.length]=arr[i]
    print(i+1,arr,ret)
}
print(i,arr,ret)