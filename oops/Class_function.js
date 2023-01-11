class bankAccount{
    consumerName
    accountNumber
    balance

    constructor(consumerName,balance=0){
        this.consumerName = consumerName,
    this.accountNumber = Date.now(),
    this.balance = balance
    }

    deposit(amount){
        this.balance += amount
    }
    withdraw(amount){
        this.balance -= amount
    }
}

const rakeshAccount = new bankAccount("rakesh", 1000)
const johnAccount = new bankAccount("john dow")
rakeshAccount.deposit(5000)
rakeshAccount.withdraw(2000)

console.log(rakeshAccount, johnAccount)