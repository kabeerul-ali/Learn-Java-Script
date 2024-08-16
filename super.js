class parent{
    constructor(){
        console.log('hi i am property of parent');
    }
}
class child extends parent{
    constructor(id){
        super();// if we not write this it will return error becouse parent constractor not call wher child constractor perameter pass it try call parent constarctorS
        

        console.log("my id is bahi",id)
    }
}
let obj=new child('baisahab');