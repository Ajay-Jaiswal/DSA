//2)Validate Subsequence array

function isSubsequence(s, t) {
    debugger
    let i=0;
let j=0;
while(i<s.length){
    if(j===t.length){
        return false;
    }
    if(s[i]===t[j]){
        i++;
    }
    j++;
}
return true;
};

console.log(isSubsequence("abc","ahbgdc"))