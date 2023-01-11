/*function ArrayChallenge(a) { 
    let i, j, temp, n=a.length;
      for(i=0; i<n-1; i++)
      {for(j=i+1; j<n; j++)
      {if(a[i] < a[j])
      {temp=a[i];
      a[i]=a[j]; 
      a[j]=temp;
      }}}
      let sum=0;
      for(i=0; i<4; i++){ sum+=a[i];}
      if(sum.length === 2){
          sum = sum.toString();
     let bot = parseInt(sum[0])
     let st = parseInt(sum[1])
        return bot + '--' + st + '--'
            }
      else{
     return sum;
      }
  }  
  // keep this function call here 
  console.log(ArrayChallenge([1, 1, 1, -5]));*/
/*

  function letsum(num){
    let obj = {}
    for(let i=0;i<num.length;i++){
    if(obj[num[i]]=== undefined) {
        obj[num[i]] = 1
    }
    else{
        obj[num[i]] += 1
    }

}
return obj
  }

  console.log(letsum([1,2,3,4,5,6,8,8,7,7,7,]))


  function find(arr,n){
    for(let i=0; i<arr.length;i++){
        if(arr[i]===n){
            return i
        }
    }
    return `${n} is not present in list`
  }
  console.log(find([1,2,3,4,56,7,],561))
  */

  function anagram(s1,s2){
    let cd = s1.split('').sort('')
    let sd = s2.split('').sort('')

    if(cd.length !== sd.length){
      return "Not valid string"
    }

    let obj = {}
    for(let i=0;i<cd.length;i++){
      if(obj[cd[i]] === undefined){
        obj[cd[i]] = 1
      }else{
        obj[cd[i]] += 1
      }

    }
    let obj1 = {}
    for(let i=0;i<sd.length;i++){
      if(obj1[sd[i]] === undefined){
        obj1[sd[i]] = 1
      }else{
        obj1[sd[i]] += 1
      }

    }

    
    return  (obj == obj1)
}

console.log(anagram("indian","ndiani"));