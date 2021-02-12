
class Greeting{
    name:string = "aseem"
    greet(arg:string){
        console.log(arg, this.name)
    }
}
var obj = new Greeting()
obj.greet("hello1234")
