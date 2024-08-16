var arr=[1,2,3,4,5];
var arr2=[11,22,33];
var add=arr.push(6);//change real array
var r=arr.pop();//change ral array
var str=arr.toString();//not change real array
console.log(`real array:${arr}\nadd 6 in array:${add}\n pop in array:${r}\nstring:${str}\nreal arra:${arr}`)
var shif=arr.shift();//change real array
var unshif=arr.unshift(10);//change real array
var con=arr.concat(arr2);//not any change in  real array
console.log(`shift:${shif}\nunshift:${unshif}\nconcat:${con}\n`);
console.log(`\n\n\n\n\n\n\nit is slice and splice code`);
var x=[1,2,3,4,5,6,7,8,9];
var slice=x.slice(2,5);
console.log(`it is real :${x} it is slice made:${slice}`);
var splic=splice(2,3,11,22,33);
console.log(`it is real :${x} it is splice made:${splic}`);




