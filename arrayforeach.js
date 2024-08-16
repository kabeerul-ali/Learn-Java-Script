//array for each arr.forEch(value,ind,arra)=>{//your code}
// it is higher order function it means it can use other function as perameter or return any other function
var x=[1,2,3,4,5,6];
x.forEach((val,ind,arr)=>{
    console.log(`value:${val}\nindex:${ind}\nfull array:${arr}`);
});
