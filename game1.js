//it is normal game
var userInput=prompt("gest the number of game");
var x=23;
var count=0;
while(userInput!==x){
    var userInput=prompt("gest the number of game");
    if(userInput==23){
        alert(`congratulatuon you win game in ${count} tries`);
        break;
    }
    else
    if(userInput<x){
        ++count;
        alert("you enter les value");
    }
    else{
        ++count;
        alert("you enter more value");
    }
}