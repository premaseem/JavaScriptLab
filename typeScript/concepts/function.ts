function display(id:number, name:string):void
{
    console.log("Id = " + id + ", Name = " + name);
}

function multi_return(id_num:number, name:string)
{
    console.log("Id = " + id_num + ", Name = " + name);
    return id_num
}

function disp_details(id:number,name:string,optinal_email?:string,...nums:number[]) {
    console.log("ID:", id);
    console.log("Name",name);

    if(optinal_email!=undefined)
        console.log("Email Id",optinal_email);

}
disp_details(123,"John");
disp_details(111,"mary","mary@xyz.com");
disp_details(111,"mary","mary@xyz.com",1,2,3);

// Annonamous function with function expression
var res = function(a:number,b:number) {
    return a*b;
};
console.log(res(12,2))

// function constructor

var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4, 3);
console.log(x);

function factorial(num){
        if (num ===1)
            return 1
    return num * factorial(num-1 )
}

console.log(factorial(5))

// lamba
var foo = (x:number)=>10 + x
console.log(foo(100))      //outputs 110

var func = x => {
    if(typeof x=="number") {
        console.log(x+" is numeric")
    } else if(typeof x=="string") {
        console.log(x+" is a string")
    }
}
func(12)
func("Tom")