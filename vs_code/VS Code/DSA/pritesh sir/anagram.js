// String Anagram
// 'hello' -> 'llheo'(first we check the string , the length of the string is equal to one another , if its is not equal(or not exists with string 1) in that condition we don't find the anagram)
//(hum kab string ko anagram kab bolte hai , jab number of letter same rehege but arrangement change ho jayega also have the same length )
//ex - 'ajay' -> 'aaay'(not a anagram)


//condition we have to check 
//1. length check(for both Strings)
//2. String 'hello'
//{h:1,e:1,l:2,o:1}
//{h:0,e:0,l:0,o:0} -> letter ko decerment karte rhege , letter ko check karte rhege

function isAnagram (string1, string2) {
    if(string1.length !== string2.length) {
        return false;
    }
    let counter = {}
    for(let letter of string1){
        counter[letter] = (counter[letter] || 0) + 1;
        console.log(counter[letter])//it will print undefined before inialize or check with OR operator 0(undefined hai tho wo 0 manlega)
    }
    console.log(counter)
for(let items of string2){
    if(!counter[items]){
        console.log("for third l")
        return false;
    }
    counter[items] -= 1;
}
return true;
}


const check = isAnagram('hello', 'llheo');
console.log(check)

//yaha nested loop use nh kar rhe hai isiliye quadratic time complexity nh hogi

//linear time complexity -> o(n)