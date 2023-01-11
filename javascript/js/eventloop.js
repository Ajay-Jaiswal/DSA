//Eg:-
console.log("start");

setTimeout(function () {
    console.log("mid")
},5000)


console.log("End");

//As in the given example The output will be
//1.start
//2.end
//3.mid

//Why Mid Comes At End ?
//Ans:- Because as we can see we have used settimer which call the function after the time expires automaatically,
//      So it waits untill the time expire but in between the time the console.log('End') happens and after that mid happens

//CALLSTACK:-------------------------------------------------------------------------------------------------------------------------------

//call stack is the place where all the execution of code occours and the execution occours one at a time
//so when we run the code 1st it run the global execution context in call stack after every execution the context exits from the callstack
//what ever comes in call stack it immidietly starts to execute it.


//Now Lets Talk About EventLoop !
//there are mainly three component
//         1.eventloop:- which checks the queue time to time if there is any code need to execute
//         2.callback Queue:-lets take a example in the above example after the set timeout our code is ready to run 
//                           but we have to add it in call stack  but how will it be add in the stack, so the engiene 
//                           automatically puts it in callback queue and when the callstack got empty our eventloop
//                           suddenly picks up the program from callback queue.
//         3.microtask Queue:-microstack queue has higherpriority than the callback queue.so what ever comes in 
//                            microtask queue executes first after that it gives preference to the callback queue
//                        eg:-All the callback function which comes through promises comes to microtask queue.


//FUNFACT about SetTimeOut():-------------------------------------------------------------------------------------------------------------

//Zero Delay:->
// Zero delay doesn't mean the call back will fire-off after zero milliseconds.
// Calling setTimeout with a delay of 0 (zero) milliseconds doesn't execute the callback function after the given interval.
// The execution depends on the number of waiting tasks in the queue. In the example below,
// the message "this is just a message" will be written to the console before the message in the callback gets processed,
// because the delay is the minimum time required for the runtime to process the request (not a guaranteed time).
// The setTimeout needs to wait for all the code for queued messages to complete even though you specified a particular time limit for your setTimeout


// setTimeout(function now() {
//     console.log("zero")
// }, 0)
// console.log("now")