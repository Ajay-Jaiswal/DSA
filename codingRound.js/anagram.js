function anagram(s1,s2){
    if(s1.length !== s2.length){
        return false
    }
    let dc = s1.split('').sort().join('')
    let cd = s2.split('').sort().join('') 

    if(dc === cd){
        return true
    }
    else{
        return false
    }
}

console.log(anagram("indian","ndiani"))


// Given an array of strings strs, group the anagrams together. You can return the answer in any order. // Input: strs = ["eat","tea","tan","ate","nat","bat","bike"] // Output: [["bat"],["bike"],["nat","tan"],["ate","eat","tea"]]




function anagram(str1 ,str2){
    let first = str1.split('').sort().join('')
    let second = str2.split('').sort().join('')

    return first === second
}
console.log(anagram("eat","tea"))

function checkanagram(arr){
    let left = 0
    let right = arr.length
    var arr1 = []
        var arr2 = []
        var arr3 = []
        while(left<right){
            let data = anagram(arr[left],arr[right])
            if(data){
                arr1.push(arr[left],arr[right])
                left++
                right--
            }else{
                arr2.push(arr[left],arr[right])
            }
        }

        return arr1
  
}

console.log(checkanagram(["eat","tea","tan","ate","nat","bat","bike"]))