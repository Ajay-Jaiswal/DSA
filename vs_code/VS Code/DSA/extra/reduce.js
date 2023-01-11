function sum(...a){
  return a.reduce((acc,curr)=>{
    return acc+curr  
  },100)
}
console.log(sum(1,2,3,4))


