class LinkedList{
    constructor(data){
        this.head={
            value:data,
            next:null
        }
        this.tail=this.head
        this.length=1
    }
    append(data){
        const newNode={
            value:data,
            next:null
        }
        this.tail.next=newNode;
        this.tail=newNode
        this.length++
    }
    prepend(data){
        const newNode={
            value:data,
            next:null
        }
        newNode.next=this.head;
        this.head=newNode
        this.length++
    }
}

const myList=new LinkedList(10)
myList.append(16)
myList.append(20)
myList.prepend(2)
myList.prepend(7)
console.log(myList)