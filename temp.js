// //1
// var arr = [1, 3, 5, 8]; // 0 1 2 3 4 5 6 7
// // output = [-1, 1, -1, 3, -1, 5, -1, -1, 8];
// var arr1 = [];
// for (let i = 0; i <=8; i++) { // i = 0;
//   let temp = null;
//   for (let j = 0; j < arr.length; j++) {
//     if (i == arr[j]) {
//       temp = arr[j];
//     }
//   }
//   if (temp == null) {
//     arr1[i] = -1;
//   } else {
//     arr1[i] = temp;
//   }
// }
// console.log(arr1);

//2
//var arr=[1,2,3,4,5,6,7];  input=3 ;output=[4,5,6,7,1,2,3]
// var arr=[1,2,3,4,5,6,7];
// let n=3;
// for (let i = 0; i < n; i++) {
//     let temp=arr[0];
//     for (let j = 0; j < arr.length - 1; j++) {
//         arr[j]=arr[j+1];            
//     }
//     arr[arr.length-1]=temp;
// }
// console.log(arr);
















//var arr = [1, 3, 5, 8]; // 0 1 2 3 4 5 6 7  // output = [-1, 1, -1, 3, -1, 5, -1, -1, 8];
//var arr=[1,2,3,4,5,6,7];  input=3 ;output=[4,5,6,7,1,2,3]
//var arr=[1,2,1,2,2,5,5,7,7,7,8,8,8,8,6,8];// =max=8 count =4 
//var arr=[1,2,2,3,5,6,8,5,6,7];//output =[1,2,3,5,6,7,8]




// var arr=[];
// let len=prompt("enter lenght of array");
// for (let i = 0; i < len; i++) {
//     let temp=prompt("enter element");
//     arr[i]=temp;
// }
// let z=0;
// for(let j=0;j< arr.length;j++){
//     if(arr[j]==7){
//         z=7;
//         break;
//     }
// }
// if(z==7){
//     console.log("Boom!");
// }
// else{
//     console.log("7 is not present");
// }




// var arr=[1,2,3,4,5,6];
// console.log(arr.length*2+arr.length-1);
// var inp= prompt("enter product for sum");
// var temp1="";
// var temp2="";
// var temp3="";
// for(x of inp){
//     if(x==","){
//         temp1+="*";        
//     }
//     else{
//         temp1+=x;
//     }
// }
// //temp , convert  +;
// for(x of temp1){
//     if(x==")"){
//         temp2+=")+"; 
              
//     }
//     else{
//         temp2+=x;
//     }
// }
// for(let i=0;i<temp2.length-1;i++){
//     temp3+=temp2[i];
// }
// // temp2[temp2.length-1]="";
// var res=eval(temp3);
// console.log(res);




var arr=[1,2,3,9,4];
var k=0;
var result=[];
for (let i = 0; i <= arr.length-1; i++) {
    if(arr[i]>k){
        k=arr[i];
    }
    
}
// for(let j=0;j<=k;j++){
//     for(let v=0;v<arr.length;v++){
//         if(j==arr[v]){
//             y[j]=arr[v];
//             break;
//         }
//         else{
//             y[j]=-1;
//         }
        
//     }





    


//how to use include method use in java script?













//3
//var arr=[1,2,1,2,2,5,5,7,7,7,8,8,8,8,6,8];// =max=8 count =4 
// var arr = [1, 2, 1, 2, 2, 5, 5, 7, 7, 7, 8, 8, 8, 8, 6, 8];
// var maxCount = 0;
// var maxValue = 0;

// for (let i = 0; i < arr.length; i++) {
//   var tempc = 1;  
//   var tempv = arr[i];  
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[j] === arr[j - 1]) {
//       tempc++;  
//     } else {
//       break;  
//     }
//   }
//   if (tempc > maxCount) {
//     maxCount = tempc;
//     maxValue = tempv;
//   }
// }
// console.log(`max=${maxValue}, count=${maxCount}`);

//4
//var arr=[1,2,2,3,5,6,8,5,6,7];//output =[1,2,3,5,6,7,8]
// var arr = [1, 2, 2, 3, 5, 6, 8, 5, 6, 7];
// let arr1 = [];
// for (let i = 0; i < arr.length; i++) {
//   if (!arr1.includes(arr[i])) {   //sarching short method
//     arr1.push(arr[i]);
//   }
// }
// console.log(arr1); // [1, 2, 3, 5, 6, 7, 8]






console.log("hi kabeerul ali from hert of indian people");

var a=10;
//var str="  iam kaberul ai  " //output=
let str=`this is value of a ${a}`;
console.log(str);