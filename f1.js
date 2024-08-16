//find vowel in string
var str=prompt("enter a string for find vowel");
var count=0;
for(var x of str){
    if(x=='a'||x=='o'||x=='e'||x=='i'||x=='u'){
        count+=1;
    }
}
prompt(`total :${count} vowel in your string:${str}`);
console.log(`total :${count} vowel in your string:${str}`);