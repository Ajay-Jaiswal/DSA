let arr = [0,1,2,3,4,5,6,7];
let out = [];
for (let i=0;i<arr.length;i++){
    let ind = arr.length - 1 - i;
    out.push("Item number: " + arr[ind])
}
