function letterCombinations(digits) {
    if(digits === "") {
      return []
    }
    let map = new Map()
    map.set("2", ['a', 'b', 'c'])
    map.set("3", ['d', 'e', 'f'])
    map.set("4", ['g', 'h', 'i'])
    map.set("5", ['j', 'k', 'l'])
    map.set("6", ['m', 'n', 'o'])
    map.set("7", ['p', 'q', 'r', 's'])
    map.set("8", ['t', 'u', 'v'])
    map.set("9", ['w', 'x', 'y', 'z'])

    let arr = []
    for(let i = 0; i < digits.length; i++) {
      let code = digits.charAt(i)
      arr.push(map.get(`${code}`))
    }

    let res = arr.reduce(function(prev, curr) {
      let temp = []
      prev.forEach(prevItem => {
        curr.forEach(currItem => {
          temp.push(`${prevItem}${currItem}`)
        })
      })
      return temp
    })
    return res
  }
  console.log(letterCombinations(25))