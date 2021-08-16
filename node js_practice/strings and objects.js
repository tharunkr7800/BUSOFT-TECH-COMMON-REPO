// strings 
let hello="hello niha"
let str = "madhu"+hello;
console.log(str);//no space we need to manually put space betwwen them to avoid such operaations

let name=`madhu is a good girl ,she is awesome ${hello}`;
console.log(name);
//also intendation matters
// let str1="madhu
// kilka
// nika"; will give error
//but
let str1=`madhu
niha
j'adore`;
console.log(str1);//intendation too
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
console.log(emp);//everything s printed
console.log(emp.eid);
console.log(emp.ename);
console.log(emp.email);
console.log(emp.issenior(5));
console.log(emp.address.state);

// object literals

let fname="madhumitha";
let lname ="raju";
var person={
    fname=fname,
    lname=lname
};
// or
var person={
    fname,
    lname
}// both declarations are same, if the name assigned to fname and the variable defines has same name then no nedd =
// if we need sapce then use"" for keys"
var student={
    "first name":"madhumitha",
    "last name":"raju"
}
console.log(student["first name"]);//use[] to access the " keys"


let fn ="f name";
let ln ="l name";
// for keys to not be static
var student={
    [fn]:"madhumitha",
    [ln]:"raju"
}
console.log(student['f name']);

/// export and import modules
// a module can have multiple named exports while only one default export
//module is a file with varibles and functions
//named export
export function name (){
    //somefunctiom
}
export var a=10;// can also export variables to oter files
// so this function can be used by other fles in the project after import ths file
// to import got to the file whre this files is needed  then
// this is called named export
import{a,name} from './filename.js';
//note the variable and the function name must be the same while eporting and importing
export default function(){
}//function or variable only one time default export can be made in a module
//export default//will gve error as we ve already exported ny default

// export in node js
// we use---> require('filename or path') to import a module 
// this will return an object with all the functions variables in that module
const data = require('http');
// this data is an object now , to access the function an variables use dot
data.createServer()// a function is called 
//data.object.key if an obj is stored in data and we want a value for paticular value of the obj
// use data.object name.keyvalue
// we can alter the values after import the data
// to export
module.exports.a;
module.exports.emp;
// this is how we export values to the other files
//or
module.exports={
a:23,
//function add()// write all the functions and varibles inside this
}
// if we give modules.exports=a; then only a will be exported
modules.exports=a;
modules.exports=add;// some function
// only add wll be exported and not varable a so use objects while exportng