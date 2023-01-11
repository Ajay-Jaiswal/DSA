class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
        this.size=0
        this.tail=null
    }
    pushBack(data){
        const node=new Node(data)
        node.next=this.head
        this.head=node
        if(this.size===0){
            this.tail=node
        }
        this.size++
    }
    popBack(){
        if(!this.size){
            throw Error("Stack is empty")
        }
        let curr=this.head
        this.head=this.head.next
        this.size--
        curr.next=null
        return curr.data
    }
}
class Stack{
    constructor(){
        this.list=new LinkedList()
    }
    push(val){
        this.list.pushBack(val)
    }
    pop(){
        return this.list.popBack()
    }
    getTop(){
        return this.list.head
    }
    getSize(){
        return this.list.size
    }
    isEmpty(){
        return this.list.size===0
    }
}

const st=new Stack()
st.push(10)
st.push(20)
st.push(30)
st.push(40)
// st.pop()
st.getTop()
console.log(st.getTop())

while(!st.isEmpty()){
console.log(st.pop(),"=========",st.getSize())
}