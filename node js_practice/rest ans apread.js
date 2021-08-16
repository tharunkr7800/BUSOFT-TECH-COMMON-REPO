// default params
function add(a=10,b=90){
    console.log('a='+a);
    console.log('b='+b);
}//ths is like settng default params
//if none of the params is passed it will be used
add();//now 10, 90 will be displayed
// we need not pass the params
//but we can also pass with params
add(20,20);//now 10 ,20 will be displayed
add(34);//34,default value of b ie 90 will be printed

// function add(a,b=90){
//     console.log('a='+a);
//     console.log('b='+b);
// }
//noe b is set as default param a have to be assigned whle calling while b need not be
add(23);//a is assigned b is dealt value
//    REST KEYWORD
//for indefinte argument passing
function names(title,names){
    console.log(title);
    console.log(names);
}
let title='names of the employees';
names(title,'madhu');
names(title,'madhu','nika','nahi');//now also only madhu will be printed but the names grows dynamically
// the umber of employees may be 10 or 5 or 100 we cant define thsize of the array too soo we use rest operator
//rest operator must be used in last ie last paramter of the function
function e_names(title,...names){//keep three dots before the parameter ,make sure the parameter is at the last
    console.log(Array.isArray(names));//note the the names here is an array 
    console.log(title);
    console.log(names);
}
e_names(title,'madhu','keerthi','rahini');//all names will be printed
//here names is an object thats is a array of strings
// SPREAD OPERATOR
//rest--> to group individual elements into an array
//spread-->to separate array elements to individual units
//spred operator is used while calling
let nam=['muth','ram','gopi','kanna'];
e_names(title,nam);//double dimesion array is formed
//if we give
e_names(title,...nam);//now the array elments are not double dimension
// if we remove ...names in the func param like
names(title,...nam);
//only muthu wii be printed//use both spread and rest in these operations
