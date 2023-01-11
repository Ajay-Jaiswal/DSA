/*
You need to create a javascript function which will accept a string and count the frequency of each alphabets. then print them in descending order like below - 

a: 20
k: 9
d: 4
l: 3
g: 1
*/
let str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'


function sort(ab){

    for(let i=0;i<ab.length-1;i++){
        for(let j=0;j<ab.length-1;j++){
            let a = ab[j]
            let b = ab[j+1]
            if(a[1]<b[1]){
                [a[1],b[1]] = [b[1],a[1]]
            }
        }
    }
    return ab
}


function string(st){
    let sd = 'abcdefghijklmnopqrstuvwxyz'
    let str = st.toLowerCase()
    let r = str.split(' ')
    let s = r.join('')
    
    
    let word = s.split('')
    let map = {}
    for(let i=0;i<word.length;i++){
    if(map[word[i]]===undefined){
        map[word[i]] = 1
    }
    else{
        map[word[i]] += 1
    }
    
    }
    let ab = []
    for(var i in map){
        ab.push([i,map[i]])
    }
    let dc = sort(ab)
    return dc
}

console.log(string(str))