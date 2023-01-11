1)HackerRank= hash tables: ice cream parlor

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var m = parseInt(readLine());
        var n = parseInt(readLine());
        a = readLine().split(' ');
        a = a.map(Number);
        
        var hash = {};
        var indecies;
        for (var i = 0; i < a.length; i++){
            if (typeof hash[a[i]] === 'undefined') {
                hash[a[i]] = [];
            }
            hash[a[i]].push(i+1);
        }
        
        for (var j = 0; j < a.length; j++){
            var complement = m - a[j];
            if (typeof hash[complement] !== 'undefined'){
                var cI = -1;
                for (var h = 0; h < hash[complement].length; h++){
                    if (hash[complement][h] !== (j+1)) {
                        cI = hash[complement][h];
                        break;
                    }
                }
                if (cI > -1) {
                    indecies = [Math.min(cI, j+1), Math.max(cI, j+1)];
                    break;
                }
            }
        }
        console.log(indecies[0], indecies[1]);
    }

}


2)Validate Subsequence array

function isValidsubsequence(array, sequence) { 
// Write your code here.
let idx = 0 ;
 for (let i= ; i < array.length; i++) {
 if (idx === sequence.length) {
break;
}
if (array[i] === sequence[idx] && idx < sequence.length) {
idx++;
}
 }

return idx === sequence.length

}
// Do not edit the line below. 
exports.isValidSubsequence = isValidSubsequence;


3)licve coding que
leetcode no 2 , 121,2395,28

=> 2395. Find Subarrays With Equal Sum
var findSubarrays = function(nums) {
    const len = nums.length
    const existing = new Set()
    
    
    for (let i = 1; i < len; i++) {
        const sum = nums[i] + nums[i - 1]
        if (existing.has(sum))  return true
        
        existing.add(sum)
    }
    
    
    return false
};

//=> 2. Add Two Numbers
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
   return addNumbers(l1,l2,0);
};

var addNumbers=function(l1,l2,carry){
    if(!l1 && !l2 && carry===0) return null;    
    var val=(l1 && l1.val) + (l2 && l2.val) + carry;    
    var list=new ListNode(parseInt(val%10));
    list.next=addNumbers((l1 && l1.next),(l2 && l2.next),parseInt(val/10));
    return list;
    
}

=> 28. Find the Index of the First Occurrence in a String

function strStr(haystack, needle) {
  if (needle === "") {
    return 0;
  }

  for (let i = 0; i < haystack.length; i++) {
    let haySlice = haystack.slice(i, i + needle.length);
    if (haySlice === needle) {
      return i;
    }
  }
  return -1;
}

//=> 121. Best Time to Buy and Sell Stock

 
var maxProfit = function(prices) {
      let max = 0;
      let l = 0;
  for (let r = 1; r < prices.length; r++) {
        if (prices[l] < prices[r]) {
          if (max < prices[r] - prices[l]) max = prices[r] - prices[l];
        } else {
          l = r;
        }
      }
    return max
};



function validSequence (a,b){
    let temp =0;
    for(let i=0; i< a.length; i++){
        if(temp=== b.length){
            break;
        }
        if(a[i] === b[temp]  && temp < b.length){
            temp++;
        }
    }

    return temp === b.length;
}

let c = validSequence([1,2,3,4,5,6,7,8,9],[1,7,4] )

console.log(c)