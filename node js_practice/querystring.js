// we use this module to convert querystring to a json object and viceversa
let u ="name=madhumitha&id=9&data=iam not a robot"
const qs = require('querystring');

let qs_object=qs.parse(u);
console.log(qs_object);// the object will be printed remember everything will ne in string change to other datatype if wanted

let emp={
    eid:1,
    ename:"madhu"
}

let str = qs.stringify(emp);// an object to a query string
console.log(str);

// in real world scenarious we canot pass an url to the query string to collect an object
// we need to trgger an event on the req object req.on(event name)then we have to parse the 
qs.parse(data.toString())
// to get the object