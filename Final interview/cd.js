let i, j, n = 4;
for(i = 1; i <= n; i++)
{
    let ch = 65;
    for(j = 1; j <= i; j++)
    {
        console.log(
            String.fromCharCode(ch) + " ");
        ch++;
    }
    console.log("<br>");
}