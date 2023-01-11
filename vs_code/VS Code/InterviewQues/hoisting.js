// // Hoisting over let var and const and what will be the output

function hoisting1(){
    console.log(a)
    var a=10;
}
hoisting1()


function hoisting2(){
    console.log(a,b,c)
    
    const b=20;
    let c=30;
    var a=10;
    
}
hoisting2()



function hoisting3(){
    console.log(a,b,c)
    
    const b=20;
    let c=30;
    var a=10;
}
hoisting3()


function hoisting4(){
    console.log(a)
    console.log(b)
    console.log(c)
    
    const b=20;
    let c=30;
    var a=10;
}
hoisting4()