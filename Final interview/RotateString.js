let str = [1,2,3,4,5,6,7,8,9]

// 789123456

function rotate(str,a){
    let k = a%str.length
    let left = 0
    let right = str.length-1
    while(left<right){
        [str[left],str[right]] = [str[right],str[left]]
        left++
        right--
    }
    let l = 0;
    let r = k -1
    while(l<r){
        [str[l],str[r]] = [str[r],str[l]]
        l++
        r--
    }
    let p = k
    let q = str.length -1
    while(p<q){
        [str[p],str[q]] = [str[q],str[p]]
        p++
        q--
    }
    return str
}
console.log(rotate(str,10))