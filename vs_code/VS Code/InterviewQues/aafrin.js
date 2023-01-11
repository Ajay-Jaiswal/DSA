// function celebration(N){
//     let M;
//     let arr = N.split("").map(Number)
//     console.log(arr)
// }
// celebration("524679")


// var combination = 2;
// var num = [];
// var limit = 500;
// var i, j, lastDigit, copyNum, flag, count;

// //Iterate from 1 to limit
// for(i = 1; i <= limit; i++)
// {
//  copyNum = i;
//  count = 0;
//  flag = 0;
//  //Check each digit starting from last digit
//  while(copyNum != 0)
//  {
//   count++;
//   lastDigit = copyNum % 10;
//   for(j = 0; j < combination; j++)
//   {
//    if(num[j] == lastDigit)
//    flag++;
//   }
//   copyNum = Math.floor(copyNum / 10);
//  }
//  // result
//  if(count == flag)
//   console.log(i);
// }

