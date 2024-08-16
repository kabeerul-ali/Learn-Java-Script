//it is item price which have 10% offer
var arr=[77,44,99,22,44,33,];
var len=arr.length;
var arr2=[];
for(let i=0;i<len;i++){
    arr2[i]=arr[i]+arr[i]*0.1;
}
for(i=0;i<len;i++){
console.log(`acctual price:${arr2[i]} offer:${arr[i]}`)
}