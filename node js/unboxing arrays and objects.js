//UNBOXING ARRAYS
let arr = ['a','b','c','d','e'];
// to get all the varibles in separate format
let [arr1,arr2,arr3,arr4,arr5]=arr;
console.log(arr);
console.log(arr1);
console.log(arr2);
console.log(arr3);
// we got in separate variables,
let[a1,a2]=arr;//valid
//the number of varible names inside the bracket[] must be less than equal to the varibles in the arr
console.log(a1);
console.log(a2);
//let[s1,s2,s3,s4,s5]=arr;//error as s5 is undefined so
let[s1,s2,s3,s4,s5='Default']=arr;//no error sr will be default assingning here
console.log(arr);
//destructuring Object
let person={
    name:"madhu",
    age:12,
    gender:'f'

}
//destructure
let {name,age,gender} =person;// same property name is important
console.log(age);
console.log(name);
console.log(gender);
// to give other names use ---":"
let{name:name1,age :age1,gender: gender1}=person;
console.log(age1);
console.log(name1);
console.log(gender1);
//but after this we cant use name,gender and age instead we can only use name1,age1 and gender1
let{name:name2,age:we,gender:edr,height=9.0}=person;

console.log(person.height);//undefined
//default value
let emp={
    eid:1,
    ename:"hijk",
    email:"madhumitha$bdsjjs",
    gender:"f"
}
// we can aslo put the elements into another object like
let{eid,ename,...data}=emp;
// the rest of the data will be grouped into separate object
console.log(data);// an object wll be printed the remaining properties will be grouped into an separate 
//new object with name data,for that we use rest operator


// global objects
// objects that are comman to all the modules like console.log
// few examples..__dirname-->gives current directory name
//__filenam-->gives current file name
 setTimeout(()=>{},2000)//ts a function with two arg first-->a callback function
 // second time that function must execute
 // this function will execute only once after the 2 secons passed
 
 let t1=setInterval(()=>{
     clearInterval(t1);// to stop the action from happening give some condition on whch u wanna 
     //stop the cose execution then put clearinterval(the object) of the setnterval
 },800);// same but repeats after every 8 seconds