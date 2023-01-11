class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
        this.tail = null
    }
    appendElement(data) {
        const node = new Node(data)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    removeElement() {
        if (this.size === 0) {
            throw Error("Queue is Empty")
        }
        let curr = this.head
        this.head = curr.next
        curr.next = null
        this.size--
        return curr.data
    }

}

class Queue {
    constructor() {
        this.list = new LinkedList()


    }
    enQueue(data) {
        this.list.appendElement(data)
    }
    deQueue() {
        return this.list.removeElement()
    }
     getSize() {
        return this.list.size
    }
    frontElement() {
        return this.list.head.data
    }
    isEmpty(){
        return this.list.size===0
    }
}
const que=new Queue()
que.enQueue(10)
que.enQueue(20)
que.enQueue(30)
que.enQueue(40)
que.enQueue(50)
while(!que.isEmpty()){
    console.log(que.getSize(),"======",que.deQueue())
    console.log(que.frontElement)
    console.log(que.isEmpty)
    console.log(que.deQueue)

}

module.exports.Queue = Queue