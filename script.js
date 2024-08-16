const objecs = {
    name: "kabeerul ali",
    fathername: "fisrat lai",
    occupation: function () {
        console.log("no 1 buissness man", this.fathername);
    }
};

const objects2 = {
    salery: 345,
    occur() {
        console.log("i am sinu");
    }
};

// Merge both objects by adding objects2 properties into objecs
Object.setPrototypeOf(objects2, objecs);

console.log(objecs.name);
console.log(objects2);
console.log(objecs);
