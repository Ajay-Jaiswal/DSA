let str ='*'

for(var i=1; i<=10; i++){
    console.log("* ".repeat(i));
 }
 
 function pyramid(n) {
    for (var i = 1; i <= n; i++) {
        var s = "";
        for (var j = 1; j <= (2 * n - 1); j++) {
            (j >= n + 1 - i && j <= n - 1 + i) ? s += "*" : s += " ";   
        }
        console.log(s);
   }
}
pyramid(10);

function lid(n) {
    for (var j = 1; j <= (2 * n - 1); j++)
     {
        var s = "";
        for (var i = 1; i <= n; i++)  {
            (j >= n + 1 - i && j <= n - 1 + i) ? s += "*" : s += " ";   
        }
        console.log(s);
   }
}
lid(10);

