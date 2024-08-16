//reduse is use for return a single value of operation like avarage etc
//arr.reduce((accumalator or result,value){operation});
var arr=[1,2,3,4,56,7];
var sum=arr.reduce((acc,val)=>{
    return acc+=val;
});
console.log(sum);