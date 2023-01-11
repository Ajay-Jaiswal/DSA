// // program to implement stack data structure
// class Stack {
//     constructor() {
//         this.items = [];
//     }

//     // add element to the stack
//     add(element) {
//         return this.items.push(element);
//     }

//     // remove element from the stack
//     remove() {
//         if(this.items.length > 0) {
//             return this.items.pop();
//         }
//     }

//     // view the last element
//     peek() {
//         return this.items[this.items.length - 1];
//     }

//     // check if the stack is empty
//     isEmpty(){
//        return this.items.length == 0;
//     }

//     // the size of the stack
//     size(){
//         return this.items.length;
//     }

//     // empty the stack
//     clear(){
//         this.items = [];
//     }
// }

// let stack = new Stack();
// stack.add(1);
// stack.add(2);
// stack.add(4);
// stack.add(8);
// console.log(stack.items);

// stack.remove();
// console.log(stack.items);

// console.log(stack.peek());

// console.log(stack.isEmpty());

// console.log(stack.size());

// stack.clear();
// console.log(stack.items);



class Stack {
    top =-1
    constructor(size) {
        this.items = new Array(size);
        this.size = size
    }

    push(element) {
        if(this.top >=this.size -1){
            return console.log("Stack Overflow")
        }
        this.top++;
        this.items[this.top] = element;
        return this.items;
    }

    pop() {
        if(this.top==-1){
            console.log("No element to remove")
        }
        else{
            this.items.splice(this.top,1)
            this.top--;
            return this.items
        }
    }
}

// class abc extends Stack{
//     constructor(name){
//         super(size,top)
//         this.name = name
//     }
//     put(){
//         return "cb"
//     }

// }

let stack = new Stack(5)
// let stack2 = new abc()

// console.log(stack)

stack.push(120)
console.log(stack)


stack.pop()
stack.pop()
stack.pop()
console.log(stack)

