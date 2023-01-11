function subsets(nums) {
    debugger
    const subsets = [[]];
    
    for (const el of nums) {
        const last = subsets.length-1;
        for (let i = 0; i <= last; i++) {
            subsets.push( [...subsets[i], el] );
        }
    }
    
    return subsets
};

console.log(subsets([1,2,3]))