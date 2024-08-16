//
class person{
    constructor(x){
        console.log("gender",x)
    }
    eat(y){
        this.et=y;
        console.log("eat:",y);
    }
    work(z){
        this.wrk=z;
        console.log("work on cpmputer",z);
    }
}
let newperson=new person('male');
newperson.eat('veg');
newperson.work('management');
let newperson1=new person('male');
newperson1.eat('non veg');
newperson1.work('full stack');