function bankAccount(consumerName,balance=0){
    this.consumerName = consumerName,
    this.accountNumber = Date.now(),
    this.balance = balance


    this.deposit = function(amount){
        this.balance += amount
    }

    this.withdraw = function(amount){
        this.balance -= amount
    }
}

const rakeshAccount = new bankAccount("rakesh", 1000)
const johnAccount = new bankAccount("john dow")
rakeshAccount.deposit(5000)
rakeshAccount.withdraw(2000)

console.log(rakeshAccount, johnAccount)