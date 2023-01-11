//  Visual Representation :
// 1-->5-->9-->6

// Memory Allocation :

// When Only one element,
// let linkedList = {
//     head: {
//         value : 1,
//         next : null
//     }
// }

// When many element,
// let linkedList = {
//     head: {
//         value : 1,
//         next : {
//             value : 5,
//             next :{
//                 value:9,
//                 next :{
//                     value:6,
//                     next : null
//                 }
//             }

//         }
//     }
// }

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1
    }

    print() {
        let arr = [];
        let myList = this.head
        
        let length = this.length;
        while (length > 0) {
            arr.push(myList.value);
            myList = myList.next
            length--;
        }
        console.log(arr)
    }

    append(value) {
        let newNode = {
            value: value,
            next: null
        }

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    
    preppend(value) {
        let newNode = {
            value: value,
            next: null
        };
        newNode.next = this.head;
        this.head = newNode
        this.length++
    }


    findLeaderNode(index) {
        let leaderNode = this.head;
        let i = 0;
        while (i < index-1) {
            leaderNode = leaderNode.next;
            i++;
        }
        return leaderNode;
    }


    insert(index, value) {
        if(index==0){
            return console.log("If you want to insert element at index 0, use Preppend Function.")
        }
        if(index>this.length){
            return console.log(`${index} index is not allocate in this Linked List,You cannot insert`)
        }

        let newNode = {
            value: value,
            next: null
        }
        let leaderNode = this.findLeaderNode(index)
        let childNode = leaderNode.next;
        leaderNode.next = newNode;
        newNode.next = childNode;
        this.length++;
    }

    remove(index) {
        if(index>this.length-1){
            return console.log(`${index} index is not allocate in this Linked List, You cannot remove`)
        }
        if(index == 0){
            let newList = this.head.next;
            this.head = newList;
            this.length--;
            return;
        }
        if(index == this.length-1 ){
            let leaderNode = this.findLeaderNode(index);
            leaderNode.next = null;
            this.tail = leaderNode;
            this.length--;
            return;
        }
        let leaderNode = this.findLeaderNode(index);
        let nodeToBeDelete = leaderNode.next;
        let remainingNode = nodeToBeDelete.next;
        leaderNode.next = remainingNode;
        this.length--;
    }
}

let linkedList = new LinkedList(2)
linkedList.append(4)
linkedList.append(5)
linkedList.preppend(1)
linkedList.preppend(0)
linkedList.append(9)
linkedList.insert(5,2)
linkedList.remove(6)


linkedList.print()
console.log(linkedList)


