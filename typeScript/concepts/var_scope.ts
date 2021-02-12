var global_num = 12          //global variable
class Numbers {
    num_val = 13;             //class variable
    static sval = 10;         //static field

    storeNum(): string {
        var local_num = 14;    //local variable
        return "qwe"
    }
}

console.log("Global num: " + global_num)
console.log(Numbers.sval)   //static variable
var obj = new Numbers();
console.log("class var: " + obj.num_val)
console.log("static var: " + Numbers.sval)
