// express is a framwork to deal with web server lke http module
// download express
// with express we can get,put,pot and delete and object from the server easily than in http
// n http we use req.url and then navigate to dfferent floders and files or services in the server
// but its tedious to do so,getting the url and then checking if they match a pattern and then giving appropriate page 
//regarding the req made
// but with express its made simple
const express = require('express');// returns a function
const app = express();// create an object 

var courses=[
    {id:1,name:'course1'},
    {id:2,name:'course2'},
    {id:3,name:'course3'}
];

app.get('/',(req,res)=>{   // a get response 
res.send('<h1>Hello from MADHUMITHA!!!</h1>');
});

app.get('/api/courses',(req,res)=>{// all courses
res.send(courses);// can send an object
});

app.get('/api/course/:id/:year/:name',(req,res)=>{
    res.send(req.params.id);// params.id where params is an object
    res.send(req.params);// the object will be displayed
    res.send(req.query);// a query object everything thats foloowed after a ?
})
app.get('/api/course/:id',(req,res)=>{// a course with specfic id
    const course=courses.find(c=>c.id==req.params.id);// see the find syntax
    if(!course) res.send('the requested id is not found').status(404);// if the couse is not found
    res.send(course);//else we send the course
    
})

const port= process.env.SETPORT||4000;
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});
// if the same had to be done using http module then we would have gor the url then used it to call a get func
// environment variable --> a varible thats a part of the environment 
// environment is something in which our process runs 
// port umber id dynamically alloted by our environment in other words a port number is not fixed
// if the port 3000 becomes busy with someother process we can change our port number dynamically
// to do so
//const port=process.env.PORT||4000;
//process is an global object and env is for environment .port will assign a port if not then 400 will be used
// to assing a environment variable we use SET PORT=8000; while running the process


// we can also send parameters in the link the parameters inculde any required info while submitting form
//example
// app.get('/api/course/:id',(req,res)=>{
//     res.send(req.params.id);// params.id where params is an object
//     res.send(req.params);
// })


// we use query string params these are optional not required though
//link-->'/:id/?sortby=name';

