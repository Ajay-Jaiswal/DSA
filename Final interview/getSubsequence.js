function printSubsequence(input, output){

    if (input.length==0) {
        console.log(output);
        return;
    }
     printSubsequence(input.substring(1), output + input[0]);
     printSubsequence(input.substring(1), output);
}
var output = "efg";
var input = "abc";
printSubsequence(input, output);