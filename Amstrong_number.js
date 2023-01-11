
function Amstrong(num){
    var amstrong = 0
    var check = num
    var sum = 0
    var power;
    var len = num.toString().length;

    while(num != 0){
        amstrong = num %10
        power = Math.pow(amstrong, len);
        console.log(power)
        sum = sum + power;
        num = parseInt(num/10)
    }
    if(check == sum){
        return ("This is Armstrong Number")
    }else{
        return ("This is not Armstrong number")
    }
}
console.log(Amstrong(153))

//console.log(Math.pow(2,3))


