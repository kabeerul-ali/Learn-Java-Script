//string methods
var str="      hiiamkabeerulali       ";
console.log(`this is real string:${str}`)
//convert capital latter
var str1=str.toUpperCase();
console.log(`this is upper case string:${str1}`)
//remove white space
var str2=str.trim();
console.log(`this is trim case string:${str2}`)
//convert into lower case
var str3=str1.toLowerCase();
console.log(`this is lower case string:${str3}`)
//string other method
let x=' start first';
let y='secound';
//slice(start,end) it retun a part of string 
var slise=x.slice(7,-1);
console.log(`it is slices strring:${slise}`)
var con=x.concat(y)
console.log(`it is concat strring:${con}`)
var rep=x.replace('r','o');
console.log(`it is replaces strring:${rep}`)
var sea=x.charAt(3);
console.log(`it is searche by index strring:${sea}`)