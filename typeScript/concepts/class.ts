
class Greeting{
    name:string = "aseem"
    greet(arg:string):string{
        console.log(arg, this.name)
        return this.name
    }
}
var obj = new Greeting()
obj.greet("hello1234")

interface ILoan {
    interest:number
}

class AgriLoan implements ILoan {
    interest:number
    rebate:number

    constructor(interest:number,rebate:number) {
        this.interest = interest
        this.rebate = rebate
    }
}

var person = {
    firstName:"Tom",
    lastName:"Hanks",
    sayHello:function() {  }  //Type template
}
person.sayHello = function() {
    console.log("hello "+person.firstName)
}
person.sayHello()