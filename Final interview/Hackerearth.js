// In the game, a player has to throw a ball toward a set of 9 Pins and the aim is to knock out as many pins as possible and get the score for the round. The game is played between 2 players for N rounds. In each round, they get a maximum of 2 throws to drop all the pins.

// How To calculate the Score:

// The Initial score of both the players is 0. A player earns a score for each round and the total score is the sum of all round scores. The score per round is calculated as per the below rules:

// 1. If the player knocks all the 9 pins in the 1st throw the round score is 18 and the other player gets his turn

// 2. If the player knocks all the 9 pins in the 2nd turn the round score is 18

// 3. Else the number of pins knocked becomes the round score

// 4. Also, in the last round (either in 1st or 2nd throw) if the player knocks all the pins the round score is 27.

function score(input){
    let p=0;
    let a=0 ;
    let b=0;
    while(p< input.length){
        if(p< input.length-3){
            if(input[p] == 9){
                a += 9*2
                p++
                //console.log(a)
            }else{
                a += input[p]+input[p+1] == 9 ? 18 : input[p]+input[p+1];  
                p = p+2
              //  console.log(a)
            }
            if(input[p] == 9){
                b += 9*2
                p++
                // console.log(b)
            }else{
                b += input[p]+input[p+1] == 9 ? 18 : input[p]+input[p+1];  
                p = p+2
                // console.log(b)
            }
        
        } else{

            if(input[p] == 9){
                a += 9*3
                p++
                // console.log(a)
            }else{
                a += input[p]+input[p+1] == 9 ? 27 : input[p]+input[p+1];  
                p = p+2
                // console.log(a)
            }
            if(input[p] == 9){
                b += 9*3
                p++
                // console.log(b)
            }else{
                b += input[p]+input[p+1] == 9 ? 27 : input[p]+input[p+1];  
                p = p+2
                // console.log(b)
            }
        }
               
    }  

    let c = a > b ? a+' '+b : b+' '+a
        console.log(c)
}


score([4,3,0,8,5,1,6,2])