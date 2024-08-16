const product={
    name:"Iphone",
    price:1000,
    description:"This is a new Iphone",
    rating:4.5,
    reviews:['good','nice']
}
Object.entries(product).forEach(([key, value]) => {
    console.log(`${key}:is ${value}`);
  });
