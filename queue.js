//queue is use fifo property it means first in first out
var queue=[];
do{
    var userInput=prompt("select a operation")
    console.log(`1.push\n2.pop\n3.show stack\n4.exit`);
    switch(userInput){
        case '1':
            pushh();
            break;
        case '2':
            popp();
            break;
        case '3':
            show();
            break;
        case '4':
            break;
        default:
            alert("chose a valid opetion");

    }    
}
while(userInput!=4);
function pushh(){
    var x=prompt('enter a value for add');
    
    queue.unshift(x);
}
function popp(){
    if(queue.length==0){
        alert("your stack is empty you can't remove value");
    }
    else{
        var re=queue.pop();
        alert(`delet ${re} in stack successfully`);
    }

}
function show(){
    for(let i=0; i<queue.lenght;i++){
        console.log(queue[i]);
    }
    
}