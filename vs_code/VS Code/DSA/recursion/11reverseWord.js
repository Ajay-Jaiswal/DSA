function reverse(str){
    if(str.length===1){
        return str;
    }
    return reverse(str.slice(1))+str[0]
}
function reverseSentenceByWord(sentence){
    let words = sentence.split(" ")
    for(let i=0;i<words.length;i++){
        words[i]= reverse(words[i])
    }
    return words.join(" ")
}

let sentence = "i am nasir";  //=> i ma risan
console.log(reverseSentenceByWord(sentence));