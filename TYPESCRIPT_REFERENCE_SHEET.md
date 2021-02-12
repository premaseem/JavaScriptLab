============= TypeScript ============= 
https://www.educative.io/blog/typescript-tutorial

# What is type script 
Typescript is a typed superset of JavaScript, create to provide type saftey, object oriented programming for big Js projects.
When you compile your TS code, all the Typescript stuff goes away and produces clean, cross-platform safe Javascript code.
 
# Installation, version check and compilation 
    $ npm install -g typescript
    $ tsc -v 
    $ tsc filename.ts

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

