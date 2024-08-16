//define class
class Myclass{
    myname(){
        console.log("my name:");
    }
    age(x){
        this.kabeerulage=x;
        console.log("my age:",x);

    }
}

let otherperson= new Myclass();
let z=otherperson.age("32");
console.log(z);