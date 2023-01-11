class Node {
    constructor(value) {
        this.value = value,
            this.next = null
    }
}

class Stack {
    constructor() {
        this.item = null;
        this.topElement = this.item;
        this.length = 0
    }

    print() {
        let arr = [];
        let myList = this.item

        let length = this.length;
        while (length > 0) {
            arr.push(myList.value);
            myList = myList.next
            length--;
        }
        console.log(arr)
    }

    push(value) {
        let newNode = new Node(value)

        if (this.item == null) {
            this.item = newNode;
            this.topElement = newNode;
            this.length++;
        }
        else {
            this.topElement.next = newNode;
            this.topElement = newNode;
            this.length++;
        }
    }

    findLeaderNode() {
        let leaderNode = this.item;
        let i = 0;
        while (i < this.length - 2) {
            leaderNode = leaderNode.next;
            i++;
        }
        return leaderNode;
    }

    pop() {
        if (this.length == 0) {
            console.log("Stack Overflow.");
            return;
        }
        if (this.length == 1) {
            this.item = null;
            this.topElement = null;
            this.length--;
            return;
        }

        let leaderNode = this.findLeaderNode();
        leaderNode.next = null;
        this.topElement = leaderNode;
        this.length--;
        return;
    }
}
let stack = new Stack()
stack.push(5)
stack.push(10)
stack.push(20)
stack.push(30)
stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.print()
console.log(stack)