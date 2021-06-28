const { runInNewContext } = require("vm");

// cretae node server call craete http server refer python to node file
//res.write(status code,{context-type:"text/plain"})
// to read data from a file and display it use file system module
// require(fs),"fs.createreadstream(filename).pipe(response object)" insde createserver function the data
// i read and sent to res object through pipe
//use nodemon ..install nodemon and the code using nodemon filename
// evry time when we make a change we have to stop the program(server) and then restart the program(server)
// so that our changes are refleted in the browser but we can use nodemo so that everytme we make a change 
// nodemon restartes the server automatically we dont have to manuallu stop the server and start it again after 
//saving the file
// to send json data to the html we use a json object first
let emp = {
    "eid":1,
    "name":"nmjnj"
};//json format
const http = require('http');
const url=require('url');
const { setServers } = require("dns");
let server=http.createServer((req,res)=>{
console.log("req accepted");
res.writeHead(200,{'Context-Type':'text/plain'});

let u =url.parse(req.url);
console.log(u.pathname);// for getting the pathname remeber to prifix with / 

res.write(JSON.stringify(emp));// use this function
res.end();
});
server.listen(3000,'localhost',()=>{
console.log("server listening");
});
// we have url module in node js


////// events --every action n an coputer is an event 
//exampl-->open a debugger,close a db open a file