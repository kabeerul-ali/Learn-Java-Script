//create a class
class intro{
    constructor(x){
        console.log('gender',x)
    }
    name(y){
        //this.nam=y;//it use foreach new object
        console.log("name:",y)
    }
    age(z){
        this.ege=z;
        //console.log("age:",z)
    }
}
let kabeerulali=new intro('male'); //it access all data of intro class ans pass argument

kabeerulali.name("kaberul ali");
kabeerulali.age("23");
