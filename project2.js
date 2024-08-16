const profile={
    name:"John Doe",
    isfollow:true,
    follower:234,
    following:676,
    decription:'hi i am kabeerul ali and i am a responsible citizen and we proud of our religion'   
}
Object.entries(profile).forEach(([x,y])=>{
    console.log(`\n ${x} :${y}`);
    console.log(typeof y);
});
