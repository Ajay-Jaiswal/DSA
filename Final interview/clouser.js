// Access nearest enviromental data or Accessing parent function  data in child function or accessing global scope data in function

function sum(a,b,c){
    function twosum(){
        var d = 5
        console.log(a+b+d)
    }
    function threesum(){
        console.log(a+b+c)
    }
    twosum()
    threesum()
    return "it is closure"
}
console.log(sum(2,3,4))


