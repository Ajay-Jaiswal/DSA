function fib(n,dp){
    if(n<=0){
        return 0;
    }
    if(n==1){
        return 1;
    }

    // check if the subproblem already solved
    if(dp[n]!==-1){
        return dp[n];
    }

    dp[n]=fib(n-1,dp)+fib(n-2,dp);

    return dp[n];
}


function bottomUpFIb(n,dp){

    dp[0]=0;
    dp[1]=1;

    for(let i=2;i<=n;i++){
        // dp[i] represent the ith term in fibonacci number
        dp[i]= dp[i-1]+dp[i-2];
    }

    return dp[n];
}

function optimizeFib(n){

    let currI=0,prev=1,prev2=0;

    for(var i=2;i<=n;i++){
        currI = prev+prev2;
        prev2=prev;
        prev=currI;
    }
    return currI;
}



let n=6;
const dp = (new Array(n+1)).fill(-1);
console.log(dp)
// console.log(fib(6,dp));


// console.log(bottomUpFIb(6,dp));


console.log(optimizeFib(6,dp));