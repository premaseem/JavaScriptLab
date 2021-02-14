var strobj = new String("my string");

console.log(strobj.search("my"))

var nums:number[] = [1,2,3,4]

nums.forEach(function(x,y,arr){
    console.log(x,y,arr)
})

var total = nums.reduce(function(a, b){ return a + b; });
console.log("total is : " + total );

nums.sort((a,c)=> a )
nums.sort((a,b)=> a > b ? 1:-1)
'4:3:2:1'.split(":").map((x)=>parseInt(x))