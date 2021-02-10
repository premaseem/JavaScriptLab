
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

# JSX stands for JavaScript XML.
JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.
JSX converts HTML tags into react elements.
JSX is an extension of the JavaScript language based on ES6, and is translated into regular JavaScript at runtime.
With JSX you can write expressions inside curly braces { }
The expression can be a React variable, or property, or any other valid JavaScript expression.

# Close empty elements with />
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



###### Node ####### 
# check node version 
$ node -v

# to install a package globally use -g 
$ npm install -g grunt-cli

