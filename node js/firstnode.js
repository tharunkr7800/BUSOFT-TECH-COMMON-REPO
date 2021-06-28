//node is a runtime environment provided to run javascript ConvolverNode,usually js codes are excuted in browser and not in separate editor so 
//node is not a programing language rather its a encironment to run js code,node is asyunchronus and not synchronus we cant use node js for
// building applications that have more cpu time(processing time) ,as node is sasynchronus it has a sngle thread to do all operations hence 
// more cpu tme will lead to creation of many threads hence not suitable for node soo when the app we develop is data oriented uses database 
//and everything we can use node as its efficient scable and fast.
//document.getid()-->js this code can'y run in node as we dont have document object,these documet objects are usually produced by brower as the js 
// code runs but here we use a sepate editor do objects like documet,window are all not available
//chrome uses v8 engine to debug or run js in browser soo node js uses the v8 environment plus some cpp code to give us the facility.
//as chrome v8 is faster than anyother brower that runs js.we chose v8+c toget node js environment 
//node completely eliminates the waiting time for clients ,even though it has only one thred it is much faster,netflix,linkedin,microsoft 
//uses node js for backend
//console.log("hello world")
//module system in node
//  var hoisting
function name(name){
    if(name=='madhu'){
        var msg ='hello '+name;
    }else{
        var msg='hello guest';
    }
    console.log(msg);
    //here even ewhen the variables are declared inside the if and else block we can use it outside the block or condtion 
    //if only that block execute
}
name('madhu');//here hello madhu is printed as the if block got executed

function namesome(name){
    if(name=='madhu'){
        var a=10;
        var msg ='hello '+name;
    }else{
        var msg='hello guest';
    }
    console.log(msg);
    console.log(a);
    
}
namesome('raju');
//here hello guest will be printed as the function os called with a name'raju'the if block is not executed hence,variable a is not initalised
function namesome(name){
    c=123;
    if(name=='madhu'){
        msg ='hello '+name;
        a=10;
    }else{
         msg='hello guest';
         b=10;
    }
    console.log(msg);
    var msg;
    
}
namesome('raju');
//here hello guest is printed even when the initialisation is done after printing ts only possible in js not in anyother language,this scope 
//is called functional scope,the variable cant be accssed outside the function,it will give error
console.log(msg);//will give error only asseccesible inside the function and noy outside the function(msg variable)
//on the other hand if a variabe is declared without a var keyword inside a function its treated as a global variable
console.log(b);//now the else block is executed hence the varible is initalised but since the varible is not declared using var varible its global
//hence can be accssed outside the function
console.log(a);//will give error if block not executed
console.log(c);//will execute as its not in any block
//let keyword same as var but let variables are block scoped
function name(name){
    if(name=='madhu'){
        let msg ='hello '+name;
    }else{
        let msg='hello guest';
    }
    console.log(msg);
    
}
name('ragu');
//erroor because let keyword is block scoped and hence can be used only inside the if or else block not anywhere outside the block or function
//let keyword is not hoisted var can be declared even after using it but let cant be declared after using it;
function name(name){
    if(name=='madhu'){
        msg ='hello '+name;
    }else{
         msg='hello guest';
    }
    console.log(msg);
    let msg;//will give error as it is declared after printing it but var wouldn't
}
name('ragu');
//var variables can be overwritten;
var num = 10;
console.log(num);//10 will be printed

var num=100;
console.log(num);//100 will be printed

let num = 10;
console.log(num);
 let num =100;
// console.log(num);//will give error as ts initialised already

var ans = 60;
let ans = 70;
console.log(ans);//error becaue and has already been initialised;

//any variable declared using let must be unique and must be declared only once;in that scope
function name(name){
    let msg='la la la la';
    if(name=='madhu'){
        let msg ='hello '+name;
    }else{
        let msg='hello guest';
    }
    console.log(msg);//since let msg is block scoped ,the msg declred above the conditional statements willl ne used
    
}
//here we have used same function name with diff funtionalites inside so for every declaration the functionaliteis are also overwritten
//check out put you will get it
//the latest declaration of the function is used whenever we call the function
// const
//assignment is compulsory we cant blindly declare the constanct lik
const c; //-->error const assingment are always nitiased and its value cant be changed
const c = 100;
c=900;//error cant change values,const variables are block scoped;
const d = 500;
if(a==100){
    const d =30
    console.log(d);//30 will be printed if this condition satisfies
}
console.log(d);//200 will be printed

var employee={
    eid=1,
    ename='madhu'
}
console.log(employee); //prints the object

employee={};
console.log(employee);//no object will be printed

let emp={
    eid=1,
    ename='madhu'
}
console.log(emp);//emp object will be printed
emp ={};
console.log(emp);//empty object will be printed

const e={
    eid=1,
    ename='madhu'
}
console.log(e);//object printed
e={};//error but the values inside the object can be changed
e.eid=8;
e.ename='praveen';
console.log(e);//the object with updated values wll be printed