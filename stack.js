//this is stack relative to dsa 
var stack=[];
do{
    var userInput=prompt("select a operation")
    console.log(`1.push\n2.pop\n3.show stack\n4.exit`);
    switch(userInput){
        case '1':
            pushh();
        case '2':
            popp();
        case '3':
            show();
        case '4':
            break;
        default:
            alert("chose a valid opetion");

    }    
}
while(userInput!=4);
function pushh(){
    var x=prompt('enter a value for add')
    stack.push(x);
}
function popp(){
    if(stack.length==0){
        alert("your stack is empty you can't remove value");
    }
    else{
        var re=stack.pop();
        alert(`delet ${re} in stack successfully`);
    }

}
function show(){
    console.log(stack);
    
}