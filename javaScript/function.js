// Function can be called with variable arguments.
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

var result = add(3); // 8
var result1 = add(3, 5); // 8
var result2 = add(3, 5, 6); //14



// Function pass by value
function increment(val) {
    val = val + 1;
    console.log("val inside ",val,"not out side")
}

var size = 3;
increment(size);
console.log(size); // 3

// Function pass by reference
function display_arr(arr) {
    arr[0]= "aseem"
    console.log("val inside ",arr,"not out side")
}

arr = [0,4,5,6]
display_arr(arr);
console.log(arr); // 3

// Closure
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

// Arrow funtion

var numbers = [1, 3, 4, 7];

var numbersIncreasedBy10 = numbers.map(function (x) { return x + 10 });

var numbersIncreasedBy10 = numbers.map(x => x + 10 );  // [ 11, 13, 14, 17 ]


// Defined and invoked function at the same time
var repeatedCharA =
    function (length) {
        var s = '';
        for (var i = 0; i < length; i++) {
            s += 'A'
        }
        return s;
    }(8);

console.log(repeatedCharA)