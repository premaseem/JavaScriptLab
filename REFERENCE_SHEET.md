============= JavaScript ============= 
https://www.javascriptinstitute.org/javascript-tutorial/

# JS semi colon horror 
The semicolon is used to separate statements, but it can be omitted if the statement is followed by a line break.
The semicolon is needed, only when you have two or more statements on the same line, not other wise :-) 

    var i = 0; i++        // <-- semicolon obligatory
                          //     (but optional before newline)
    var i = 0             // <-- semicolon optional
        i++               // <-- semicolon optional

# Print 
JavaScript does not have any print object or print methods.Only exception with window object with
print method to print the contents of the page. 

    <button onclick="window.print()">Print this page</button>

# Functions
Function can be invoked with any number of arguments. 
If number is less, the remaining args would get undefined value. 
If arg number is more then defined, it can be read using arguments objects. 

    function add(x, y) {
        var result = 0;
        if (arguments.length == 2) {
            result = x + y;
        } else {
            for (let i = 0; i < arguments.length; i++) {
                result = result + arguments[i];
            }
        }
        return result;
    }
     
    var result = add(3 ); // less then defined
    var result = add(3, 5); // exact match
    var result2 = add(3, 5, 6); // more then defined 

# default function value

    function power(x, n = 2) { console.log(x,n); }
# Function call by value vs reference 
Arguments in JavaScript are passed to function by value. It means that argument is copied into parameter variable.


# Variable Scopes
    Three ways of defining your variables: var, let, and const.
    var x = 5.6;
    let x = 5.6;
    const x = "abc"
var has a function scope, not a block scope.
If you use var outside of a function, it belongs to the global scope.
If you use var inside of a function, it belongs to that function.
If you use var inside of a block, i.e. a for loop, the variable is still available outside of that block.

let has a block scope or bracket scope

const cannot be reassigned values, but they can modify value of non primitive data structure like list, maps

global variable can be modified and accessed from anywhere
global variable can be shadowed at function or block level

Note: If you did not define variable with keyword, they would be assigned to the global object. Unless you were in strict mode, then you would get an error if your variables were undefined.

# unintentional global variable
Used variable inside a function without the var keyword it will be global and accessible outside this function. To avoid creating unintentional global variables, inside functions you should declare variables with the var keyword
    
    function getHalf(value) {
        temp = 2; // temp got definfed globally
        return value / temp;
    }
    console.log(temp) 

# Closure Function 
A closure is a function together with the environment attached to it. 
In other words closure is an inner function that has access to an outer function’s variables.
JavaScript uses lexical scope. It means that functions use the variable scope where they were defined not where they are executed.

    function counterBuilder() {
        var count = 0;
         
        function counter() {
            count = count + 1;
            return count;
        }
         
        return counter;
    }
    var myCounter = counterBuilder();
    console.log(myCounter()); // 1
    console.log(myCounter()); // 2

# Arrow functions allow us to write shorter function syntax

// Arrow function - Arrow functions allow us to write shorter function syntax
// remove the function keyword

    myArrowFunc = (args) => {
        console.log(args)
        return args
    }

// when there is only one return statement remove the body paranthesis

    myArrowFunc1 = (arg1,arg2) => "Hello world" + arg1 + arg2;

// when there is only one argument remove the arg brackets return statement remove the body paranthesis

    myArrowFunc2 = args => "Hello world" +args;

// Arrow function with map

    var numbers = [1, 3, 4, 7];
    var numbersIncreasedBy10 = numbers.map(function (x) { return x + 10 }); // traditional 
    var numbersIncreasedBy10 = numbers.map(x => x + 10 );  // arrow 


============= ReactJs ============= 

# Basic purpose of REACT
React's goal is in many ways to render HTML in a web page.
React renders HTML to the web page by using a function called ReactDOM.render().
The ReactDOM.render() function takes two arguments, HTML code and an HTML element.
    
    ReactDOM.render(<p>Hello</p>, document.getElementById('root'));

# Why react needs node.js for react
React js is a client side library, if you write entire code in pure Js (no jsx etc) you would not need node.js
However for the code management, react applications are divided into multiple files, 
which needs node.js server or processing to compile, combine, package and generate a final
client side js script which can run on browser. 

Userful links: 
### 10 reactjs challenges / projects 
https://scotch.io/courses/10-react-challenges-beginner/fetch-and-display-from-an-api

============= JSX ============= 

# JSX stands for JavaScript XML.
JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.
JSX converts HTML tags into react elements.
JSX is an extension of the JavaScript language based on ES6, and is translated into regular JavaScript at runtime.
With JSX you can write expressions inside curly braces { }
The expression can be a React variable, or property, or any other valid JavaScript expression.

# Close empty elements with closing bracket

    const myelement = <input type="text" />;


# The HTML code must be wrapped in ONE top level element.
    const myelement = (
      <div>
        <h1>I am a Header.</h1>
        <h1>I am a Header too.</h1>
      </div>
    );

# single line JSX
    const myelement = <h1>React is {5 + 5} times better with JSX</h1>;

# multi line JSX with paranthesis
    const myelement = (
      <ul>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Cherries</li>
      </ul>
    );



============= NodeJs ============= 
# check node version 
    $ node -v

# to install a package globally use -g 
    $ npm install -g create-react-app
    $ npm i -g create-react-app
    
# create react app 
    $ npx create-react-app <app-name>

