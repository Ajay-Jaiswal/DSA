// example  10--->16--->20

// let linkedList {
//     head : {
//         value : 10,
//         next : {
//             value : 16,
//             next : {
//                 value : 20,
//                 next : null
//             } 
//         }
//     } 
// }

// Adding Head
class LinkedList{
    constructor(data){
        this.head = {
            value : data,
            next : null
        }
        this.tail = this.head
        this.length = 1
    }

    // Adding another
    append(data) {
        const newNode = {
            value : data,
            next : null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    // Adding element at First
    prepend(data){
        const newNode = {
            value : data,
            next : null
        }
        newNode.next = this.head
        this.head = newNode
        this.length++
    }


    traverse(req){
        let counter = 0
        let currentCounter = this.head
        while(counter != req){
            counter++
            currentCounter = currentCounter.next
        }
        return currentCounter
    }

    insert(index,data){
        const newNode = {
            value : data,
            next : null
        }
        const leaderNode = this.traverse(index-1);
        const nextNode = leaderNode.next

        leaderNode.next = newNode;
        newNode.next = nextNode;
    }
    delete(index){
        const leaderNode = this.traverse(index-1)
        const unwantedNode = leaderNode.next
        const nextNode = unwantedNode.next

        leaderNode.next = nextNode
        this.length--
    }
}




let myList = new LinkedList(10)
myList.append(16)
myList.append(50)

myList.prepend(6)
myList.insert(1,5)

myList.delete(1)

console.log(myList)