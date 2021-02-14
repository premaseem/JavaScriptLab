
var n = new Number("34.4")
console.log(n)
console.log("TypeScript Number Properties: ");
console.log("Maximum value that a number variable can hold: " + Number.MAX_VALUE);
console.log("The least value that a number variable can hold: " + Number.MIN_VALUE);
console.log("Value of Negative Infinity: " + Number.NEGATIVE_INFINITY);
console.log("Value of Negative Infinity:" + Number.POSITIVE_INFINITY);


n.valueOf()
function employee(id:number,name:string){
    this.id = id
    // this.email="wc"
}
var emp = new employee(123,"prem")
var emp1 = new employee(456,"prem1")

// prototype acts as static

employee.prototype.email = "prem@gmail.com"
console.log(emp.email)
console.log(emp1.email)
console.log(emp.id)
console.log(emp1.id)

