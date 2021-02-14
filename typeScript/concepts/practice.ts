var message:string = "Hello World1"
// var cc = message.indexOf("Wod")

console.log(message.valueOf())
// console.log(typeof(message.valueOf())

var re = /apples/gi;
var str = "Apples are round, and apples are juicy.";
if (str.search(re) == -1 ) {
    console.log("Does not contain Apples" );
} else {
    console.log("Contains Apples" );
}