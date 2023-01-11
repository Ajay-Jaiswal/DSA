class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }

    print() {
        let arr = [];
        let myList = this.first

        let length = this.length;
        while (length > 0) {
            arr.push(myList.value);
            myList = myList.next;
            length--;
        }
        console.log(arr)
    }

    enqueue(value) {
        let newNode = new Node(value)

        if (this.length == 0) {
            this.first = newNode;
            this.last = newNode;
            this.length++;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
            this.length++;
        }
    }

    dequeue() {
        if (this.length == 0) {
            console.log("Queue is Empty, You can't remove.");
            return;
        }
        if (this.length == 1) {
            this.first = null;
            this.last = null;
            this.length--;
            return;
        }

        let leaderNode = this.first;
        let remainingNode = leaderNode.next;
        this.first = remainingNode;
        this.length--;
        return;
    }
}

let queue = new Queue()
queue.enqueue(2)
queue.enqueue(5)
queue.enqueue(10)
queue.enqueue(20)
queue.dequeue()
queue.dequeue()

queue.print()
console.log(queue)