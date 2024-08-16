let data="secerate data";
class user{
    user(name,email){
        this.name=name;
        this.email=email;
        console.log(name.emaol);
    }
    viewdata(){
        console.log("view data",data);
    }
}
class editdata extends user{
    constructor(name,email){
        super(name,email);
        console.log("admin can chaneg data");
    }
}
let student1 =new user('st1','email1');
let student2 =new user('st2','email2');
student1.viewdata();
let teacher1 =new editdata('teacher1','email1');