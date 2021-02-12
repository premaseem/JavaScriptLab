const doo =1
function run() {
    var foo = "Foo";
    let bar = "Bar";
    doo1 = 234

    console.log(foo, bar); // Foo Bar

    {
        let baz = "Bazz";
        console.log(baz); // Bazz
    }

    console.log(foo); // ReferenceError
    console.log(doo); // ReferenceError
}
run();
doo
console.log(doo1); // ReferenceError
