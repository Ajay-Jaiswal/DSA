//Difference Between Call,Apply,Bind

let userDetail1 = {
    name: "Hritik",
    age: 21,
    printDetail: function (state, country) {
        console.log(this.name + " " + state + " " + country)
    }
}
userDetail1.printDetail("goa", "India")

let userDetail2 = {
    name: "Lucky",
    age: 25
    //let say we want to use the same function printdetails for this object also,
    //but its not the correct way that to create the same function again and again
}
//Call
//In Order To Use The Same Functionality We Can Simply Call That Function By Using CALL
//Simply It Means We Are Borrowing The Function From An Other Function
userDetail1.printDetail.call(userDetail2, "delhi", "India")

//Apply
//Apply Is The Same As Call But There Is Just A Minute Difference Between Them i.e
//Insted of Giving Parameters One By One We Can simply Send A Arraylist In Apply
userDetail1.printDetail.apply(userDetail2, ["delhi", "India"])

//Bind
//Same As Call()
//Instead Of Calling The Function Directly ,It Says Dont Call The Function Directly
//You Can Simply Store The Function Some Where.
//Bind Returns A Function So To Access That We Need To Use Some Variable To Store The Data
let save = userDetail1.printDetail.bind(userDetail2, "delhi", "India")
console.log(save)
save();