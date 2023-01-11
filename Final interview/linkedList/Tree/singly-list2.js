class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}
class LinkList {
    constructor() {
        this.first = null
        this.last = null
    }
    insertInFrontOfList(data) {
        const node = new Node(data)
        if (!this.first) {
            this.first = node
            this.last = node
        } else {
            node.next = this.first
            this.first = node
        }
    }
    insertInlastOfList(data) {
        const node = new Node(data)
        if (!this.first) {
            this.first = node
            this.last = node
        } else {
            this.last.next = node
            this.last = node
        }
    }
    insertAfterKthPosition(data, k) {
        const node = new Node(data)
        let curr = this.first
        let i = 1
        while (i < k) {
            curr = curr.next
            i++
        }
        if (!curr && i != k) {
            console.log("invalid postion")
            throw Error("invalid Position")
        } else if (!curr && i === k) {
            this.insertInlastOfList(data);
        } else {
            node.next = curr.next;
            curr.next = node
        }

    }
    deletionAtFirst(){
        let curr=this.first.next
        this.first=null
        this.first=curr
    }
     deletionAtLast(){
        let curr=this.first
        while(curr.next.next!=null){
            curr=curr.next
        }
        curr.next=null
        
    }
    deletionAfterKthPosition(k){
        let i=1
        let curr=this.first
        while(i<k){
            curr=curr.next
            i++
        }
        let temp=curr.next.next
        curr.next=temp
        curr=null
    }
    printList() {
        let curr = this.first;
        while (curr) {

            console.log(curr );
            curr = curr.next
        }
    }
}

const list = new LinkList();
list.insertInFrontOfList(10);
list.insertInlastOfList(9);
list.insertAfterKthPosition(2,1)
list.deletionAtFirst()
//list.printList()
console.log(list)