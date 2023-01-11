//Linear Search Algorithm 

const users = [{username : "simran" , email : "simran@gmail.com"},
               {username : "abc" , email : "abc@gmail.com"},
               {username : "xyz" , email : "xyz@gmail.com"},
            ] 

function isUserExist(array, values){

    for(let item of array){
        if(item['username'] == values){
            return true;
        }
    }
    return false;
}

const res = isUserExist(users, "abc")
console.log(res)

//time complexity O(n) = linear