function Anagram(string1, string2) {
    if (string1.length !== string2.length) return false;

    let map = new Map()
    for (let i = 0; i < string1.length; i++) {
        if (map.has(string1[i])) {
            map.set(string1[i], map.get(string1[i]) + 1)
        }
        else {
            map.set(string1[i], 1)
        }
    }

    for (let i = 0; i < string2.length; i++) {
        if (!map.has(string2[i])) {
            return "Strings are not anagram"
        }
        else {
            map.set(string2[i], map.get(string1[i]) - 1)
        }
    }
    return "Yes, Those strings are anagram";
}


const result = Anagram('anwar', 'waran')
console.log(result);

