//filter it return a pease of array where condition is true
//filter student marsk which is above 90
var marsk=[77,98,96,54,64,86,8,90];

var filterarr=marsk.filter((val,ind,array)=>{
    return val>=90;
});
console.log(`real:${marsk}\nfilter:${filterarr}`);