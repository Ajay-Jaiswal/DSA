// best case O(nlogn)   worst case O(n^2)
function quickSort(originalArr) {
    if (originalArr.length <= 1) {
       return originalArr;
       } else {
             var leftArr = [];              
             var rightArr = [];
             var newArr = [];
             var pivot = originalArr.pop();      //  Take a pivot value
             var length = originalArr.length;
             for (var i = 0; i < length; i++) {
                if (originalArr[i] <= pivot) {    // using pivot value start comparing
                   leftArr.push(originalArr[i]);      
             } else {
                     rightArr.push(originalArr[i]);
           }
         }
       return newArr.concat(quickSort(leftArr), pivot, quickSort(rightArr)); // array will be                                                                            //returned untill sorting occurs
    }
 }

 console.log(quickSort([1,3,2,4,5,7,8,9]))