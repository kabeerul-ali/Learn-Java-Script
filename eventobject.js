let btn=document.querySelector("#btn");
btn.addEventListener('click',function hat(e){
    console.log(e.type);
    console.log(e.target);
    try{
    console.log(e.clientX);
    }
    catch{
        console.log(Error)
    }
    prompt("do you love me");
});