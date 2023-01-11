function addString(number){
    let current=0
    let alphabet="abcdefghijklmnopqrstuvwxyz"
    let str=''
    while(current<number){
          str+=alphabet[current]
          current++
    }
  return str
  }
  
  function stringAccNum(arr){
        let arr1=[""]
      let maxNumber=Math.max(...arr)
      for( let i=1;i<=maxNumber;i++){
            arr1.push(addString(i))
      }
      for(let i=0;i<arr.length;i++){
          arr[i]=arr1[arr[i]]
      }
      return arr
  }
  
  
  let arr=[2,4,3,5,6]
  let result=stringAccNum(arr)
  console.log(result)