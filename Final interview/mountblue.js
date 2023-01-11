const funds = require("./funds.json");

//console.log(funds)

// 1. Find the number of funds whose fund_house is TAURUSMUTUALFUND_MF
// for(let i=0;i<funds.length;i++){
//     console.log(funds[i].fund_house)
// }
/*
for(let i=0; i<funds.length;i++){
  if(funds[i].fund_house === "TAURUSMUTUALFUND_MF"){
    console.log(funds)
  }
}*/

/*
function mapuse(funds){
    var map = new Map();
    for(let i=0;i<funds.length;i++){
        
        if(map.has(funds[i].fund_house)){
            map.set(funds[i].fund_house,map.get(funds[i].fund_house)+1)
        }else{
            map.set(funds[i].fund_house,1)
        }

    }
    return map
}
console.log(mapuse(funds))*/


// 2. Find the number of funds for each fund_house
// Sample out
// {
//   "FH_A: 23,
//   "FH_B": 34,
//   ...
// }

var obj = {}
for(let i=0;i<funds.length;i++){
  if(obj[funds[i].fund_house] === undefined){
    obj[funds[i].fund_house] = 1
  }else{
    obj[funds[i].fund_house] += 1
  }
  
}
console.log(obj) 

// 3. Find the number of funds for each fund_type for each fund_house
// Sample output
// {
//   "FH_A": {
//     "TYPE_X": 12,
//     "TYPE_Y": 23,
//   },
//   "FH_B": {
//       "TYPE_X": 13,
//         ...
//   }
// }
//  function fundHouse(funds) {

//   let map2 = new Map();
//   for (i = 0; i < funds.length; i++) {
//     if (funds[i].fund_type != undefined) {
//       if (map2.has(funds[i].fund_house)) {
//         let m = map2.get(funds[i].fund_house);
//         let y = m.get(funds[i].fund_type);
//        if(y){ 
// // console.log👍
//         m.set(funds[i].fund_type, y + 1)
//        }else{

//        }
//       } else {
//         let x = new Map();
//         x.set(funds[i].fund_type, 1)
//         map2.set(funds[i].fund_house, x)
//       }
//     }
//   }
//   return map2;
// }

 //let c = fundHouse(funds)
 //console.log(c)
// 4. Find the average volatility of each fund_house
// {
//   "FH_A": 12.3,
//   "FH_B": 32.2
// }

/*
function average(funds) {
  let map = new Map();
  let map2 = new Map();
  for (i = 0; i < funds.length; i++) {
    if (map.has(funds[i].fund_house)) {
      map.set(funds[i].fund_house, map.get(funds[i].fund_house) + 1);

    } else {
      map.set(funds[i].fund_house, 1)
    }
  }

  console.log(map)
  for (i = 0; i < funds.length; i++) {
    if (map2.has(funds[i].fund_house)) {
      let sum = (map2.get(funds[i].fund_house) + funds[i].volatility);
      map2.set(funds[i].fund_house, sum);
    } else {
      map2.set(funds[i].fund_house, funds[i].volatility)
    }
  }
  // return map2;
  for (i = 0; i < funds.length; i++) {

    if (map.has(funds[i].fund_house) && map2.has(funds[i].fund_house)) {
      let x = (funds[i].fund_house);
      map.set(funds[i].fund_house, map2.get(x) / map.get(x))
    }
  }

  console.log(map2)

  return map;
}*/

//  let c = average(funds);
//  console.log(c);