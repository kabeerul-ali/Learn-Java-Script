//map is similar for each for array but it can return new arrau of sum operation result
var arr=[1,2,3,4,5,6];
//var newarr=arr.mao((value,ind,array)=>{ your code});
var newarr=arr.map((val,ind,array)=>{
    return val*val;
});
console.log(`value:${arr} squere:${newarr}`)