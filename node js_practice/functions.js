// function hoisting
//hoisting-->calling before declaring or assigning

add(11,11);//perfectly vald -->hoisting
function add(num1,num2){
    let ans = num1+num2;
    console.log(ans);
}

add(2,3);//a function will only be executed only when its called but we can call the function first and the declare it in js
//         FUNCTION EXPRESSIONS
//3 types
// 1.ananomus
//2.named
//self-invoking
//sub(10,56);//error cant call before declaration even when you use var this cant be called before declaration
//anonymus
let sub=function(num1,num2){//notice there is no name to the function
    let ans=num1-num2;
    console.log(ans);
}

sub(10,9);
//ananymous function without name;
//these are function expressions
// a function assigned to a variable
// if we declare a function like this we cant use hoisting that is we cant call sub befor its declaration
//  named function exp
let mul = function Multiplication(num1,num2){
    let ans = num1*num2;
    console.log(ans);
}
mul(8,9);//valid
//Multiplication(3,4);//not valid , can be called only inside the function and not outside the function itself is the scope of the function
//eg-->recurssion
//self-invokng
let div = (function division(num1,num2){
    let nas=num1/num2;
    console.log(nas);
})(9,3);//can be invoked withnh the declartion
//   ARROW FUNCTIONS

let func=(p1,p2)=>{let ans=p1-p2;
console.log(ans);
}
func(10,9);
//name=(parameter)=>{logic};-->arrow function f there is only one line we need not use{} also when there is one parameter too we need not use()

let double=(n)=>{return n*2;};
console.log(double(9));

//let dou=n=>return n*2;
//console.log(dou(5)); //error whenever there is return use {} or simply n*2 not return n*2

let dou=(n)=>n*2;
console.log(dou(5));

//let dou=n=>n*2;//i 1 param we can remove() too
console.log(dou(5));

let display=()=>console.log('happy coding');
display();//for un parameterised function

setInterval(()=>{

console.log(new Date());
},1000);//for every 1000 ms this function will be called;
