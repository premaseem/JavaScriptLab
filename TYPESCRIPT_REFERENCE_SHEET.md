============= TypeScript ============= 
https://www.educative.io/blog/typescript-tutorial

Debugging Type script :
https://www.jetbrains.com/help/idea/running-and-debugging-typescript.html#ws_ts_run_debug_server_side

# What is type script 
Typescript is a typed superset of JavaScript, create to provide type saftey, object oriented programming for big Js projects.
When you compile your TS code, all the Typescript stuff goes away and produces clean, cross-platform safe Javascript code.
 
# Installation, version check and compilation 
    $ npm install -g typescript
    $ tsc -v 
    $ tsc filename.ts

# Running type script frm command prompt
    $ npm install -g ts-node
    $ ts-node ./typeScript/concepts/practice.ts

# Starts a TypeScript REPL (interactive typescript console)
    $ ts-node

# JS Types
JS has eight types: string, number, null, undefined, object, symbol, bigint, and boolean. 
Javascript is dynamically typed, which means that it doesn’t know the type of your variable until runtime and variables can change their type

# TS Types 
Three types: any, Built-in, and User-defined
any => If we use this type, it will override type checking.
Built-in => number, string, boolean, undefined, null, and void
User-defined => Interface, class, enum, array, tuple

# Assigning types

    let variableName: typeScriptType = value;  

## Any type 
Any is loose typing in JS. `any` type would infer the type dynamically. It is 

    let myvar: any = 'This is a String'

## Built-in type
number: Double precision 64-bit floating point values for ints and fractions
string: string with single, double quote and backticks for multi lines.
boolean: true or false
void: used on function return type to represent non returning functions ( like java)
null: represents intentional absence of a value
undefined: denotes value give to uninitialzed var

## Tuples 
You can express an array when you know the type of a fixed number of elements and predefine your types in order.

    let numberTuple: [number, string, number];

## Enum
Enums allow us to define a set of named predefined constants.

    enum MyStringEnum {
        ChoiceA = "A",
        ChoiceB = "B",
    }
    
## String 
String can written with single or double quote same as JS
If you want multiple lines or variable substitution, use `${}` with backtick 

    let namevar:string = 'Aseem'
    var lname:string = `I am ${namevar}
    and I am 22 year old `
    cosole.log(lname) 


# Type Assertion in TypeScript
The reason why it's not called "type casting" is that casting generally implies some sort of runtime support while, “type assertions” are purely a compile time construct and a way for you to provide hints to the compiler on how you want your code to be analyzed.
    
    var str = '1'
    var str2:number = <number> <any> str   //str is now of type number
    console.log(typeof(str2))

# TypeScript Variable Scope
global scope 
class scope 
static scope 
local scope 

    var global_num = 12          //global variable
    class Numbers {
    num_val = 13;             //class variable
    static sval = 10;         //static field
    
        storeNum(): void {
            var local_num = 14;    //local variable
        }
    }
    
    console.log("Global num: " + global_num)
    console.log(Numbers.sval)   //static variable
    var obj = new Numbers();
    console.log("class var: " + obj.num_val)
    console.log("static var: " + Numbers.sval)



# Operators
An operator defines some function that will be performed on the data. The data on which operators work are called operands
Ternary, increment, decrement and other java operators

    var num:number = -2 
    var result = num > 0 ?"positive":"non-positive"
    console.log(result)

# loops 
Traditional 

    for(let i=0; i<10;i++){
        console.log(i) 
    }

Enhanced loop: would get index, use them over collection

    for(index in arr){
        console.log(index,arr[index])
    }

For Each loop: takes function as argument and passes value to function

    arr.forEach(function(value){
            console.log(value
        }
    );


    
# TypeScript and Object Orientation
Object Orientation considers a program as a collection of objects that communicate with each other via mechanism called methods.
   
Object − An object is a real time representation of any entity. 
Every object must have three features −

    State − described by the attributes of an object
    
    Behavior − describes how the object will act
    
    Identity − a unique value that distinguishes an object from a set of similar such objects.

Class − A class in terms of OOP is a blueprint for creating objects. A class encapsulates data for the object.

Method − Methods facilitate communication between objects.

# Functions 
Typescript does enhance functions with strong signatures we can use to define parameters and return types.
the number of values passed to a function must match the number of parameters defined. 

## call by value
This method copies the actual value of an argument into the formal parameter of the function. In this case, changes made to the parameter inside the function have no effect on the argument.

## call by reference or pointer 
This method copies the address of an argument into the formal parameter. Inside the function, the address is used to access the actual argument used in the call. This means that changes made to the parameter

## Optional Parameters 
Optional parameters can be used when arguments need not be compulsorily passed for a function’s execution. A parameter can be marked optional by appending a question mark to its name. The optional parameter should be set as the last argument in a function.

    function disp_details(id:number,name:string,mail_id?:string) {
    console.log("ID:", id);
    
    if(mail_id!=undefined)  
        console.log("Email Id",mail_id);
    }
    disp_details(123,"John");
    disp_details(111,"mary","mary@xyz.com");

## Rest Parameters
Rest parameters are similar to variable arguments in Java. To declare a rest parameter, the parameter name is prefixed with three periods. Any nonrest parameter should come before the rest parameter.
    
    function addNumbers(...nums:number[]) {  
    
        for(i = 0;i<nums.length;i++) {
            sum = sum + nums[i];
        }
        console.log("sum of the numbers",sum)
    }
    addNumbers(1,2,3)
    addNumbers(10,10,10,10,10)
Note: Rest cannot follow optional params 

## Default Parameters 
Function parameters can also be assigned values by default. However, such parameters can also be explicitly passed values.

    function calculate_discount(price:number,rate:number = 0.50) {
    var discount = price * rate;
    console.log("Discount Amount: ",discount);
    }
    calculate_discount(1000)
    calculate_discount(1000,0.30)

## Anonymous Function
Functions that are not bound to an identifier (function name) are called as anonymous functions. These functions are dynamically declared at runtime. 
Anonymous functions can accept inputs and return outputs, just as standard functions do. An anonymous function is usually not accessible after its initial creation.
Variables can be assigned an anonymous function. Such an expression is called a function expression.

    var res = function(a:number,b:number) {
        return a*b;  
    };
    console.log(res(12,2)) 

# Function Constructor
Just like class object, new keyword can be called to construct an Anonymous function. 

    var myFunction = new Function("a", "b", "return a * b");
    var x = myFunction(4, 3);
    console.log(x);

## Recursion and TypeScript Functions
Recursion is a technique for iterating over an operation by having a function call to itself repeatedly until it arrives at a result. Recursion is best applied when you need to call the same function repeatedly with different parameters from within a loop.

## Lambda Function or Arrow Function Expression 
It is an anonymous function expression that points to a single line of code.
    
    var func = x => {
        if(typeof x=="number") {
            console.log(x+" is numeric")
        } 
        else if(typeof x=="string") {
            console.log(x+" is a string")
        }
    }

## Function Overloads
Functions have the capability to operate differently on the basis of the input provided to them. In other words, a program can have multiple methods with the same name with different signature and implementation. This mechanism is termed as Function Overloading. TypeScript provides support for function overloading.
Note − The function signature doesn’t include the function’s return type.

    function disp(s1:string):void;
    function disp(n1:number,s1:string):void;
    
    function disp(x:any,y?:any):void {
    console.log(x);
    console.log(y);
    }
    disp("abc")
    disp(1,"xyz");

# Datatype in Type script 

## Numbers Datatype
TypeScript like JavaScript supports numeric values as Number objects. A number object converts numeric literal to an instance of the number class. The Number class acts as a wrapper and enables manipulation of numeric literals as they were objects.

    var var_name = new Number(value)
note: In case a non-numeric argument is passed as an argument to the Number’s constructor, it returns NaN (Not–a–Number)

valueOf()
Returns the number's primitive value.

toString(<base>)
Returns the string representation of the number's value.

## String Datatype 
The String object lets you work with a series of characters. It wraps the string primitive data type with a number of helper methods.

## Array 

    // using array
    var values:number[] = [1,2,3,3] 

    // using Array object 
    let values: Array<string | number> = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
    
    // using array constructor with values 
    var names:string[] = new Array("Mary","Tom","Jack","Jill") 

    // array constructor with size 
    var arr_names:number[] = new Array(4) 

# Interface 
Interfaces are not to be converted to JavaScript. It’s just part of TypeScript.

    interface IPerson {
    firstName:string,
    lastName:string,
    sayHi: ()=>string
    }
    
    var customer:IPerson = {
    firstName:"Tom",
    lastName:"Hanks",
    sayHi: ():string =>{return "Hi there"}
    } 

# Duck type 
The TypeScript compiler implements the duck-typing system that allows object creation on the fly while keeping type safety.
In duck-typing, two objects are considered to be of the same type if both share the same set of properties. Duck-typing verifies the presence of certain properties in the objects, rather than their actual type, to check their suitability. 

    interface IPoint {
    x:number
    y:number
    }
    function addPoints(p1:IPoint,p2:IPoint):IPoint {
    var x = p1.x + p2.x
    var y = p1.y + p2.y
    return {x:x,y:y}
    }
    
    //Valid
    var newPoint = addPoints({x:3,y:4},{x:5,y:1})
    
    //Error
    var newPoint2 = addPoints({x:1},{x:4,y:3})

# Name spaces 
It is similar to package in java 
A namespace is a way to logically group related code. This is inbuilt into TypeScript unlike in JavaScript where variables declarations go into a global scope and if multiple JavaScript files are used within same project there will be possibility of overwriting or misconstruing the same variables, which will lead to the “global namespace pollution problem” in JavaScript.
A namespace definition begins with the keyword namespace followed by the namespace name as follows −
    
    namespace SomeNameSpaceName {
    export interface ISomeInterfaceName {      }  
    export class SomeClassName {      }  
    } 










