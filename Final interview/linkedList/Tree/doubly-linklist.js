class Dnode{
    constructor(data,prev=null,next=null){
        this.data = data;
        this.prev = prev
        this.next = next
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0;
    }

    insertAtBeginning(data){
        const dNode = new Dnode(data);
        if(!this.head){
            this.head = dNode
            this.tail = dNode
        }else{
            dNode.next = this.head
            this.head.prev = dNode;
            this.head = dNode
        }
        this.size += 1
    }

    insertAtEnd(data){
        const dNode = new Dnode(data);
        if(!this.tail){
            this.head = dNode;
            this.tail = dNode;
        }
        this.tail.next = dNode;
        dNode.prev = this.tail
        this.tail = dNode;

        this.size+=1
    }

    insertAtPosition(data,k){
        if(this.sizes<k){
            throw Error('Invalid position')
        }else{
            const dNode = new Dnode(data);

            let count = 1;
            let curr = this.head;

            while(count !== k){
                curr = curr.next;
                count++
            }
            let nextNode = curr.next;
            curr.next = dNode;
            dNode.prev = curr;
            dNode.next = nextNode
            nextNode.prev = dNode;

            this.size += 1
        }
    }


    prinrDList(){
        let curr = this.head
        while(curr){
            console.log(curr.data)
            curr = curr.next
        }
    }

    deletionFromBeggining(){
        if(!this.head){
            throw Error('List is empty cant delete')
        }
        let temp = this.head;
        this.head = this.head.next;

        this.head.prv = null;
        temp.next = null

        this.size -= 1
        }

        deletionFromEnd(){
            if(!this.head){
                throw Error('List is empty cant delete')
            }
            let secondLast = this.tail.prev;
            secondLast.next = null;
            this.tail.prev = null
            this.tail = secondLast;

            this.size -=1
        }
}

const dist = new DoublyLinkedList()

dist.insertAtBeginning(5)
dist.insertAtBeginning(6)
dist.insertAtBeginning(4)
dist.insertAtEnd(12)
dist.insertAtEnd(121)
dist.insertAtEnd(120)

dist.insertAtPosition(7,3);
//dist.printDList()

console.log(dist)
