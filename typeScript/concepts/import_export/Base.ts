
var fun1  = function(){
    console.log("func1 ")
}

var fun2  = function(){
    console.log("func1 ")
}

class Person {
    name:string
    constructor(name:string) {
        this.name = name
    }
    greet = function(){
        console.log("say hellow")
    }
}

export {
    Person,fun1,fun2
}