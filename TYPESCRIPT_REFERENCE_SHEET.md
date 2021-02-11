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
    
# Functions 
Typescript does enhance functions with strong signatures we can use to define parameters and return types.

