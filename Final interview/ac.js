let MAX_CHARS = 26;
function isValid(count)
{
    let k = parseInt(sk[0])
    let val = 0;
    for(let i = 0; i < 26; i++)
    {
        if (count[i] > 0)
        {
            val++;
        }
    }
    return (k >= val);
}

function kUniques(sk)
{
    let k = parseInt(sk[0])
    let s = sk.slice(1)
    let u = 0;
    let n = s.length;
    let count = new Array(26);
     
    for(let i = 0; i < 26; i++)
    {
        count[i] = 0;
    }
    for(let i = 0; i < n; i++)
    {
        if (count[s[i].charCodeAt(0) -
                   'a'.charCodeAt(0)] == 0)
        {
            u++;
        }
        count[s[i].charCodeAt(0) -
              'a'.charCodeAt(0)]++;
    }
    if (u < k)
    {
        document.write("Not enough unique characters");
        return;
    }
    let curr_start = 0, curr_end = 0;
    let max_window_size = 1;
    let max_window_start = 0;
    for(let i = 0; i < 26; i++)
    {
        count[i] = 0;
    }
    count[s[0].charCodeAt(0) -
           'a'.charCodeAt(0)]++;
    for(let i = 1; i < n; i++)
    {
        count[s[i].charCodeAt(0) -
               'a'.charCodeAt(0)]++;
        curr_end++;
        while (!isValid(count, k))
        {
            count[s[curr_start].charCodeAt(0) -
                            'a'.charCodeAt(0)]--;
            curr_start++;
        }
        if (curr_end - curr_start + 1 > max_window_size)
        {
            max_window_size = curr_end - curr_start + 1;
            max_window_start = curr_start;
        }
    }
 
    console.log( s.substring(max_window_start, max_window_start + max_window_size));
}
 
// Driver Code
let s = "2aabbacbaa";
//let k = 2;
 
kUniques(s, k);
//console.log(KUniqueCharacters("2aabbacbaa"))