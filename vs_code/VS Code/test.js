// Alternate reversal of linked list in a group of size k. Like the first group should be reversed, the second group should be the same, the third should be reversed, the fourth should be the same, etc.

// Input : 1->2->3->4->5->6->7->8,  k=2
// Output : 2->1->3->4->6->5->7->8


class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        },
            this.tail = this.head,
            this.length = 1
    }

    append(value) {
        let newNode = {
            value: value,
            next: null
        }

        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }

    findLeaderNode(index) {
        let length = 0
        let remainingList = this.head;
        while (length < index-1) {
            remainingList = remainingList.next
            length++
        }
        return remainingList
    }

    addElement(index, value) {
        let newNode = {
            value:value,
            next:null
        }
        let leaderNode = this.findLeaderNode(index);
        console.log(leaderNode)
        let childNode = leaderNode.next
        leaderNode.next = newNode;
        newNode.next = childNode;
        this.length++
    }

    reverse(index) {
        let first = linkedList.head.value
        let second = linkedList.haed.value.value
    }
}

let linkedList = new LinkedList(1)
linkedList.append(2)
linkedList.append(3)
linkedList.append(4)
linkedList.append(5)
linkedList.append(6)
linkedList.append(7)
linkedList.append(8)

// console.log(linkedList)
// console.log(linkedList.findLeaderNode(1))

linkedList.addElement(2,100)
console.log(linkedList)



// for (let i = 0; i < linkedList.length; i += k) {
//     while (k < LinkedList.length) {
//         LinkedList.reverse(k)
//     }
// }