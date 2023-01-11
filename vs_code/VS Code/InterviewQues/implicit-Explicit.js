// Implicit and Explicit Binding

var obj= {
    name:"Amir",
    print:function(){
        console.log(this.name)
    }
}
obj.print() //This is called implicit binding

var obj1 ={
    name:"Sohel"
}

obj.print.call(obj1) //This is called explicit binding