function missingNumber(arr){
    let maxNumber = Math.max(...arr);
    
    let totalSum=0
    for(let i=0;i<arr.length;i++){
        totalSum += arr[i]
    }
    let ts = (maxNumber*(maxNumber+1)/2)
    return ts-totalSum
}

console.log(missingNumber([1,2,3,4,5,7,8,9]))
/*
function sqrt(num){
     let c = num ** 0.5
     if(Math.round(c)==c){
        return true 
     }
     else{return false }
}

console.log(sqrt(24))

// maximum Word
function maximumWord(sentences){
    let max = 0
    for(let currSentence of sentences){
        let currWordCount = currSentence.split(' ').length
        if(currWordCount>max){
            max= currWordCount;
        }
    }
    return max;
}

console.log(maximumWord(['the fast track,the indian idle,thenjgbjkgn,dfgk,mrjng.gnnvdse,fhjbaefbg,sduygfveguef,dygvgvufhb,fseuyggyubfc,fasjfcbawhf,vdsfhysf']))
*/