// in php or any other serverside language  we dont create a server we use xampp or apachae to create a server,but node is server side lanuage and we can create a server 
//and make that server listen to clients 
// so we are locally gonna create a server using node
// comment and run orelse wll collapse
var http = require('http');
var server = http.createServer((req,res)=>{
    console.log("requested");
});
server.listen(3000,'localhost',()=>{
    console.log("the server is listening");
});
// we require a http module for this web server,
// we create our own server using create server when a server is created it listens for clients ,
//here the server is out localhost,when we give localhost out ip add s replaced to 127.0.0.1 thats our own compuer
//so all the requests in our computer at port 3000 is monitored
// thats the server is running at port 3000 and listening for clients
// create server requires a caalback function wth two params request and response this function s called whenevr there is a request 
//made in the server
// same with listen the function is called when the server is listening


// now go to google type localhost:3000 in the search bar
// the requested word will be printed
// we wont see anythng  the chrome as we didnt send any response abojet

                                // the request object
var http = require('http');
var server = http.createServer((req,res)=>{
   console.log(req);// its an object that has lot of keys and values
   console.log(req.url,req.method);
    // lets fill something in the response
    res.setHeader("Content-Type",'text/plain');// we have to set header so that the browser that displays this content can know if the response
    // object id json ,html or text or css
     res.write("hello from madhu");// write to the response
     res.end();// make sure to end it
// run one after another
    // res.setHeader('Content-Type','text/html');// to send html response
    // res.write("<h1>hello from maddy</h1>");
    // res.end();
});
server.listen(3000,'localhost',()=>{
    console.log("the server is listening");
})
// the url is copied afterlocalhost:300 since there isnt anything after 3000 a slash is printed
// the method is get method(get or post)




////              to read html files
// we cant ise re.write to write all lines of html hence we read the html file and put data of the filr to the res objects
// use fs module to read the file
const f =require('fs');
var data =f.readFile('./index.html',(err,data)=>{// give the path of the fle and callback function err and data of the file
    if(err){// if error we stop reading
        console.log("error while reading");
        res.end();// remember to end the response orelse the request will be active all time
    }else{
        //res.write(data); only when we use muliple lines we can use this else we can simple
        res.end(data);// use this 
    }
});  
// if we wanna make the webiste more dynamic then response obj should renser diff html pages not only one 
// one for about page next login page,reg page..etc
// in that case get the url re.url and add the response object you want
// res.statusCode=200,404,... we can also set status code