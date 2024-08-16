// //rrow function code
// //queue is use fifo property it means first in first out
// do{
//     var userInput=prompt("select a operation\n1.add\n2.sub\n3.mul \n4.exit")
//     switch(userInput){
//         case '1':
//             add();
//             break;
//         case '2':
//             sub();
//             break;
//         case '3':
//             mul();
//             break;
//         case '4':
//             break;
//         default:
//             alert("chose a valid opetion");

//     }    
// }
// while(userInput!=4);
// function add(){
//     var x=prompt('enter a values for add');
//     var y=prompt('enter secound value');
//     let o=x+y;
//     alert(`sum of value is:${o}`);                
// }
// function sub(){
//     var x=prompt('enter a values for substract');
//     var y=prompt('enter secound value');
//     alert(`sub of value is:${x-y}`);   
    
// }
// function mul(){
//     var x=prompt('enter a values for nultiply');
//     var y=prompt('enter secound value');
//     alert(`mul of value is:${x*y}`);     
// }
const fun=()=>{
    console.log("i am function");
}
fun();
let btn=document.querySelector("#btn");
btn.addEventListener("click",function abc(){
    alert("button is clicked");
});