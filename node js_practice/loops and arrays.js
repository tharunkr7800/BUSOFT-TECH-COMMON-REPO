var name=['madhu','prakash','gyhuj','hujik'];

for(let i =0;i<name.length;i++){
    console.log(name[i]);
}
// for in loop same as for loop 
for(let e in name){//no need to specify length
    console.log(e);
    console.log(name[e]);
}
//iterated throught iteratable object for of loop
for(let n of name){
    console.log(n);
}
//throught objects
var emp={
    eid:1,
    ename:"madhu",
    email:['madhu.com','du.com'],
    address:{
        street:'thilakar',
        city:'chennai',
        state:'tn'
    },
    issenior:function(exp){
        return exp>=5;
    }
}
for(let e in emp){
    console.log(emp[e]);
    // ket value pairs name[key]-->gives value
}
// for (let e of emp){
//     console.log(e);
// }// wll give error
// array of objects

var employees=[
    {eid:1,ename:'madhu'},
    {eid:2,ename:'madhu'},
    {eid:3,ename:'madhu'}
];
 for(let i in employees){
     console.log(employees[i]);
 }// the objects will be printed
 for (employee of employees){
    for(let emp in employee){
        console.log(employee[emp]);
    }
 }// use two for loops to prints the valuess