class Cache{
    constructor(name){
        this.name =  name
    }

    setName(name){
        this.name = name
    }

    getName(){
        return console.log(this.name)
    }
}

let cache = new Cache()
cache.setName("Amir")
cache.getName()