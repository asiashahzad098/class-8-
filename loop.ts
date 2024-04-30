#!/usr/bin/env node

for (let i = 1; i <= 10; i++) {
    let tableNumber: number = 10;
    console.log(tableNumber,"x",i,"=",tableNumber*i);
}
console.log(".........................");
for(let i=0; i<10; i++) {
    console.log(i);
}
console.log("------------------------");
for (let i = 1; i <= 10; i++) {
    let tableNumber:number=7;
    console.log(tableNumber,"x",i,"=",tableNumber*i);   
}
console.log(",,,,,,,,,,,,,,,,,,,,,,,,,,,");
const girls= ["sana","ayesha","sara","amna",];
let index =1;
for(let girl of girls) {
    console.log(`my ${index} sister is ${girl}`);
}
console.log("..............................");
let girls2 =["amna","sara","ayesha","noreen",];
for(let girl of girls){
    console.log(girl);
}
console.log("==================================");

    let i=1;
    while (i <= 10){
        console.log(5,"x", i, "=", 5 * i);
        i++;
    }
    console.log(",,,,,,,,,,,,,,,,,,,,,,,,,,,,,");
    let j =11;
    do{
        console.log(7,"x",j, "=", 7 * j,"line33");
        j++;
    }
    while(j<=10);
   