/*function teachmap(num){
    let map = {}
    for(let i=0;i<num.length;i++){
        if(map[num[i]]== undefined){
            map[num[i]] = 1
        }
        else{
            map[num[i]] += 1
        }
    }
    console.log(map)
    var max = 0
        var smax = 0
    for(let el in map){
        if(max < map[el]){
            smax = max
            max = map[el]
        }
        else if(map[el]>smax){
            smax = map[el]
        }
    }

    return max
}

console.log(teachmap([1,2,3,4,5,6,7,9,4,4,5,3,5,9,4]))



//prime no. check by using recursion
function isPrime(n, i=2){
    if(n<i){return 'No'}
    if(n==i){return 'YES'}
    if(n%i === 0){
        return 'No'
    }
    else if(i*i >= n){
        return 'Yes'
    }
    return isPrime(n, i+1)
}
console.log(isPrime(19))*/

// function found(arr){
//     let count = 0
//     for(let i=0;i<arr.length;i++){
//         console.log('i : ' + i)
//         for(let j=i+1;j<arr.length;j++){
//             console.log('j : ' + j )
//             if(arr[j]%arr[i]==0 || arr[i]%arr[j]==0){
//                 count++
//             }
//         }
//     }
//     return count
// }

// console.log(found([1,2,3]))


// function Say(){
//     var name = 'Ajay'

//     console.log(name)
//     console.log(age)

//     let age = 21
// }
// Say()

// N = 10
// A[] = {6,1,2,8,3,4,7,10,5}
// Output: 9


/*
function findRichest(arr){
    let maxSum=0
    let max=0

    for(let i=0;i<arr.length;i++){
        let sum=0
        for(let j=0;j<arr[i].length;j++){
            sum+=arr[i][j]
        }
        if(maxSum<sum){
            maxSum=sum
            max=i
        }
    }return maxSum
}
console.log(findRichest([[1,2,3],[3,2,1]]))
*/

// function maximumWealth(accounts){
//     let max = 0
//     for(let customer in accounts){
//         let customertotal = 0
//         for(let money of customer){
//             customertotal += money
//         }
//         max = Math.max(max,customertotal)
//     }
//     return max
// }
// console.log(maximumWealth([[1,2,3],[3,2,1]]))

//let  s = 'abbdccdc'
// class Dnode{
//     constructor(data,prev=null,next=null){
//         this.data = data;
//         this.prev = prev
//         this.next = next
//     }
// }

// class DoublyLinkedList{
//     constructor(){
//         this.head = null
//         this.tail = null
//         this.size = 0;
//     }

//     insertAtBeginning(data){
//         const dNode = new Dnode(data);
//         if(!this.head){
//             this.head = dNode
//             this.tail = dNode
//         }else{
//             dNode.next = this.head
//             this.head.prev = dNode;
//             this.head = dNode
//         }
//         this.size += 1
//     }
// }

// let Aj = new DoublyLinkedList
// Aj.insertAtBeginning(15)
// Aj.insertAtBeginning(10)

// console.log(Aj)

// class node{
//     constructor(data,next=null){
//         this.data = data
//         this.next = next
//     }
// }
// class LinkedList{
//     constructor(){
//         this.first = null
//         this.last = null
//     }

//     InsertInFirst(data){
//         const n = new node(data)
//         if(!this.first){
//             this.first = n
//             this.last = n
//         }else{
//             curr = this.first
//             this.first = n
//             this.first.next = curr
//         }
//     }
//     insertinLast(data){
//         const n = new node(data)
//         if(!this.first){
//             this.first = n
//             this.last = n
//         }
//         else{
//             this.last.next = n
//             this.last = n
//         }
//     }

//     addkthposition(data,k){

//     }
//     deletefirst(){
//         const curr = this.first.next
//         this.first = null
//         this.first = curr
//     }
//     deletelast(){
//         let curr = 1
//         if(this.last.next.next !== null){
//             cu
//         }
//     }
//     printList() {
//         let curr = this.first;
//         while (curr) {

//             console.log(curr );
//             curr = curr.next
//         }
//     }
// }

// let list = new LinkedList()
// list.InsertInFirst(15)
// list.insertinLast(35)
// list.deletefirst()
// list.printList()


// var rotateRight = function(head, k) {
//     debugger
//     let newHead = head;
//     let curNode = head;
//     let arr = [];
//     while(curNode){
//         arr.push(curNode);
//         curNode = curNode.next
//     }
//     let actualRotations = k % arr.length;
//     while(k > 0 && arr.length > 1 && actualRotations > 0){
//         const tail = arr.pop();
//         newHead = new ListNode(tail.val, newHead);
//         tail.next = newHead;
//         arr[arr.length - 1].next = null;
//         k--;
//         actualRotations--;
//     }
//     return newHead;
// };

// let str = '({{[]}})'
// let  isValid = function(s){
//     let map = {
//         '(' : ')',
//         '[' : ']',
//         '{' : '}'
//     }
//     let stack = []
//     for(let i=0;i<s.length;i++){
//         stack.push(s[i])
//     }
//     console.log(stack)
// }

// let  result = isValid(str)
// console.log(result)

/*
function arrayPairSum(nums) {
    nums.sort((a,b)=>(a-b))
    let result = 0
    for(let i=0;i<nums.length; i = i+2){
        result += nums[i]
        console.log(nums[i])
    }
   return result
};
console.log(arrayPairSum([1,2,3,4,5,6]))
*/
/*
function isvalid(s){
    let map = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }
    let stack = []
    for(let i=0;i<s.length;i++){
        if(map[s[i]]){
            stack.push(s[i])
            console.log(stack)
        }else{
            if(s[i] !== map[stack.pop()]){
                console.log('value : ' + map[stack.pop()])
                return false
            }
        }
    }
    return result
}

console.log(isvalid('(){[[[}{}[}[}['))
*/

// let map = {
//     '(' : ')',
//     '{' : '}',
//     '[' : ']'
// }

// console.log(map['{'])

// Prime Number
// function PrimeNo(num){

//     for(let i=0;i<num;i++){
//         let s = i
//         for(let j= 2;j<s;j++){
//             if(s%j !==0){
//                 console.log('prime No.' +i)
//             }
//         }
//     }
// }

// console.log(PrimeNo(10))

// function findMedianSortedArrays(nums1, nums2) {
//     let t =  [...nums1,...nums2]
//     let s = 0
//     for(let i=0;i<t.length;i++){
//         s += t[i]
//     }

//     let y = s/t.length
    
//     return y
//   };

//  class Node{
//     constructor(data,next=null){
//         this.data = data,
//         this.next = next
//     }
//  }
//  class ListNode{
//     constructor(){
//         this.first = null
//         this.last = null
//     }

//     insert(data){
//         const node = new Node(data)
//         if(!this.first){
//             this.first = node
//             this.last = node
//         }else{
//             let curr = this.first
//             this.first = node
//             this.first.next = curr 
//         }
//     }
//     insertLast(data){
//         const node = new Node(data)
//         if(!this.first){
//             this.first = node
//             this.last = node
//         }else{
//             this.last.next = node
//         }
//     }
//  }
//  let dummy = new ListNode()
//  dummy.insert(2)
//  dummy.insert(4)
//  dummy.insert(6)
//  dummy.insertLast(7)

//   function swapPairs(head) {
//     let dummy=new ListNode();
//     dummy.next = head;
//     let result = dummy;
//     while(dummy.next && dummy.next.next){
//         let p=dummy.next,q = dummy.next.next;
//         dummy.next = q;
//         p.next = q.next;
//         q.next = p;
//         dummy = p
//     }
//     return result.next

// };

//console.log(dummy)


// class Node{
//     constructor(data, next=null){
//         this.data = data
//         this.next = next
//     }
// }
// class LinkedList{
//     constructor(){
//         this.first = null
//         this.last = null
//     }
//     insert(data){
//         const node = new Node(data)
//         if(!this.first){
//             this.first = node
//             this.last = node
//         }else{
//             //curr = this.first
//             node.next = this.first
//             this.first = node
//         }
//     }
// }

// const list = new LinkedList()
// list.insert(10)
// console.log(list)

// function generator(num){
    
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz'
//     let currentIndex = 0
//     let str = ''
//     while(currentIndex<num){
//         str += alphabet[currentIndex]
//         currentIndex++
//     }
//     return str
// }
// console.log(generator(2))

// function generators(num){
    
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz'
//     let str = ''
//     str = alphabet[num - 1]
//     return str
// }
// console.log(generators(5))

// function arg(array){
//     let a = []
//     for(let i=0;i<array.length;i++){
//         a.push(generator(array[i]))
//     }
//     return a
// }
// console.log(arg([2,3,4,5,8,6,4,5]))

// function miss(array){
//     let s = array[array.length-1] * (1 + array[array.length-1])
//     let t = s/2
//     let sum = 0
//     for(let i=0;i<array.length;i++){
//         sum += array[i]
//     }
//     return t - sum

// }
// console.log(miss([1,2,3,4,5,6,8]))

// function missw(arr){
//     let s = []
//     let sum = 0
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i+1]-arr[i] !==1){
//             s.push(arr[i] + 1)
//         }
//     }
//     return s.join('')
// }
// console.log(missw([10,11,12,13,15]))

// function freq(arr){
//     let map = {}
//     for(let i=0;i<arr.length-1;i++){
//         if(!map[arr[i]]){
//             map[arr[i]] = 1
//         }
//         else{
//             map[arr[i]] += 1
//         }
//         var max = 0
//         if(max < map[arr[i]]){
//             max = map[arr[i]]
//         }
        
//     }
//     console.log(max)
//     return map
// }
// console.log(freq([1,2,3,1,23,,4,5,64,,2,2,2,45,6,8]))


/////////////////////////////////////
//Async Await
// function aaf(){
//     setTimeout(function(){
//         console.log('async await first')
//     },15000)
// }

// function aas(){
//     setTimeout(function(){
//         console.log('async await second')
//     },14000)
// }

// function aat(){
//     setTimeout(function(){
//         console.log('async await third')
//     },13000)
// }

// function aafo(){
//     setTimeout(function(){
//         console.log('asyn await fourth')
//     },12000)
// }

// async function aac(){
//    await aaf()
//     await aas()
//     await aat()
//     await aafo()
// }

// aac()

// function binary(num,k){
//     let l = 0;
//     let r = num.length-1
//     while(l<r){
//     let mid = Math.floor(l+r)/2
//     if(num[mid]<k){
//        l= mid + 1
//     }
//     else if(num[mid]>k){
//         r = mid - 1 
//     }
//     else {
//         return mid
//     }
//  }
// }
// let i = binary([1,2,3,5,4],2)
// console.log(i)


// function fact(num){
//     if(num ===1){return 1}
//     return num * fact(num -1)
// }
// //console.log(fact(10))

// function divrest(n){
//     let r = fact(n)
//     let count = 1

//     let s = 10**count+20
//     if(r/s===0){
//         return count
//     }
//     else{
//         count ++
//     }
// }

// console.log(divrest(5))

// function linearS(arr,k){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===k){
//             return i
//         }
//     }
// }
// console.log(linearS([1,2,3,4,5],5))

// function duplicate(arr){
//     let map = {}
//     for(let i=0;i<arr.length;i++){
//         if(map[arr[i]] === undefined){
//             map[arr[i]] = 1
//         }
//         else{
//             map[arr[i]] += 1
//         }
//         var b = []
//         while(map[arr[i]] !== 1){
//             b.push(arr[i])
//         }
//     }
//     return b
// }

// console.log(duplicate([1,2,3,4,5,6,7,5,5,5]))

// plaindromic

// function pal(s){
    
//     let d = s.split('')
//     let f = d.reverse()
//     let u = f.join('')
//     console.log(d,f,u)
//     if(s===u){
//         return 'It is Palindromic'
//     }
//     return 'It is Non Palindromic'
// }

// console.log(pal('-123'))

// let x = [1,2]
// let y = [3,4]

// let z = [...x,...y]
// console.log(z)

/*Advantage Club has a unique way of celebrating. Suppose the last celebration was when the number of users was N and the next celebration will happen when the number of users grows to M, such that N and M have the same digits only in a different order. Ankit is a new joiner and he missed the last celebration, write a code to help Ankit find M, i.e. the number of users Advantage Club needs to reach for the next celebration. Example: Input: N = "524976"                Output: M = "526479"Also, mention the Time Complexity of your code.*/ 
// function missed(M,){
//   let  N = 524976 
//   let  M = 526479
//     console.log(N-M)
//     if(N.length === M.length){
//     if(M !== N){
//         return M
//     }
//     }
//     else{
//         return 'It is Wrong'
//     }

// }
// missed()

// let arr = [1,2,3,4,5,6,7,8,8,8,9]
// function yes(a){
//     let objA = {}
//     for(let i=0;i<a.length;i++){
//         if(objA[a[i]] === undefined){
//             objA[a[i]] = 1
//         }
//         else{
//             objA[a[i]] += 1
//         }
//         let r = []
//         var max = 0
//         var smax = 0
//         if(objA[a[i]] > max){
//             max = a[i]
//             smax = max
//         }
       
//     }

//     return max
// }
// console.log(yes(arr))
/*Have the function SearchingChallenge(str) take the str parameter being passed and find the longest substring that contains k unique characters, where k will be the first character from the string. The substring will start from the second position in the string because the first character will be the integer k. For example: if str is "2aabbacbaa" there are several substrings that all contain 2 unique characters, namely: ["aabba", "ac", "cb", "ba"], but your program should return "aabba" because it is the longest substring. If there are multiple longest substrings, then return the first substring encountered with the longest length. k will range from 1 to 6.*/
// function longestCommonPrefix (strs) {
//     if(strs.length ==0){return ""}
    
//     let prefix = strs[0]
//     for(let i=0;i<strs.length;i++){
//        while(strs[i].indexOf(prefix) != 0){
//            prefix = prefix.substring(0,prefix.length-1);
//            //console.log('prefix : ' + prefix)
//            //console.log(strs[i].indexOf(prefix))
//        }
//     }
//     return prefix
    
// };

// console.log(longestCommonPrefix(['aabbacbaa']))

// function numberSearch(str) {
//     var separatedString = str.split(" , ");
//     var letters = [];
//     var numbers = [];
//     var sum = 0;
    
//     for (var i=0; i<str.length; i++) {
//     var currentItem = separatedString[i];
//     if (isNaN(parseInt(currentItem))) {
//     letters.push(currentItem);
//     } else {
//     numbers.push(currentItem);
//     };
//     };
    
//     for (var i=0; i<numbers.length; i++) {
//     currentNumber = Number(numbers[i]);
//     sum = sum + currentNumber;
//     };
    
//     return (Math.round(sum/letters.length));
//     };


var longestSubstring = function(str, k) {
    k = parseInt(str[0])
    s = str.slice(1)

    const maxUnique = new Set(s).size;
    let maxLen = 0;
    for (let i = 1; i <= maxUnique; i++) {
        let hashMap = {}, atLeastK = 0, uniqueCount = 0, left = 0;
        for (let right = 0; right < s.length; right++) {
            hashMap[s[right]] = hashMap[s[right]] + 1 || 1;
            if (hashMap[s[right]] === k) atLeastK++;
            if (hashMap[s[right]] === 1) uniqueCount++;         
            while (uniqueCount > i) {
                if (hashMap[s[left]] === k) atLeastK--;
                hashMap[s[left]]--;
                if (hashMap[s[left]] === 0) uniqueCount--;
                left++;
                console.log(hashMap)
            }       
            if (uniqueCount === i && atLeastK === i) {
                console.log('uniqueCount' + uniqueCount)
                console.log('atLeastK'+ atLeastK)
                console.log('i'+i)
                maxLen = Math.max(maxLen, right-left+1)
               // console.log(maxLen)
            }
        }
    } 
    return maxLen;
};
console.log(longestSubstring("2aabbacbaa"))

