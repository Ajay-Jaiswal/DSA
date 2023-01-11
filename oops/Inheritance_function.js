// inheritance means it inherit property from parent to child
  // inheritance in function
function BankAccount(consumerName,balance=0){
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

//SavingAccount.prototype = Object.create(BankAccount.prototype)
function SavingAccount(consumerName,balance=0){
    BankAccount.call(this, consumerName, balance)
    this.transaction = 5000
}

const khalisiAccount = new SavingAccount("khalisi", 1000)
khalisiAccount.deposit(5500)
console.log(khalisiAccount)


// class in inheritance

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




class savingAccount extends bankAccount{
    transaction = 5000

    constructor(consumerName,balance=0){
        super(consumerName, balance)
    }

    takebuissnessAmount (amount){
        console.log("takebuissnessAmount", amount)
    }
}

const rakeshAccount = new savingAccount("rakesh", 1000)
const johnAccount = new savingAccount("john dow")
rakeshAccount.deposit(5000)
rakeshAccount.withdraw(2000)

console.log(rakeshAccount, johnAccount)
