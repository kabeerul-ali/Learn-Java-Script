//for loop it is pre define loop 
console.log("for loop");
var y=prompt("enter value for print table");
var x;
for(x=0;x<=10;x++){
    console.log(`${y} * ${x} =${y*x}`);
}
//while loop it is conditiona loop
console.log("while loop");
x=0;
while(x<=10){
    console.log(`${y} * ${x} =${y*x}`);
    x++;    
}
// do while loop it first done circle then check condition
console.log(" do while loop ");
x=0;
do{
    console.log(`${y} * ${x} =${y*x}`);
    x++; 
}
while(x<=10);
