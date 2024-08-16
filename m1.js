//filter student marsk which is above 90
var s=[];
var userInput=prompt("enter a number");
for(let i=1;i<=userInput;i++){
    s[i-1]=i;
}
var sum=s.reduce((res,val)=>{
    return res+val;
});
var prod=s.reduce((acc,val)=>{
    return acc*val;
});
console.log(`sum:${sum}\nproduct:${prod}`);