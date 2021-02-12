var arr = []
for( let i =0; i < 10; i++){
    arr.push(i)
}
console.log(arr)

for(let item in arr){
    console.log(item)
}

var j:any;
var n:any = "a b c"

for(j in n) {
    console.log(n[j])
}


arr.forEach(function(item){console.log(item)} )
