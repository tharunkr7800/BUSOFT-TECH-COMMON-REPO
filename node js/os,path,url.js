// os-->all os related activities are used here
const os =require('os');// returns an object
console.log(os.arch());// 32 or 64 bit --that is underlying architecture
console.log(os.platform());// windows 32 or linux or max 
console.log(os.totalmem());// total memoryy
console.log(os.freemem());// free mem available to use
console.log(os.homedir());// home directory
console.log(os.tmpdir())// temporary directory;
console.log(os.hostname());// hostname of the os

/// URL MODULE
// to split web address into diff readable parts

let url = require('url');
// mostly we use parse method to get the sepatae terms in the given url

let u ="http://www.madhu.com/contacts.html/?name=madhu&time=time";
let p=url.parse(u);// returns a object

console.log(p);
// the protocol , hostname ,path , query href everything will be put up

console.log(p.href);
console.log(p.path);// everything after hostname
console.log(p.pathname);// only the file name not the entire path
console.log(p.query);// a string will be printed but f we want an object qill all values then 

let parse=url.parse(u,true);// two arguments here
console.log(parse.query);// here the query will be an object, so that we cane get the params from the query

/////////////// PATH MODULE

const path =require('path');
const { config } = require('process');
const { listenerCount } = require('events');
// to work with fle paths and directories


/////////npm amd package json
 //npm is used to doenload packages four our code ie like express or nodemon
 // we download such packages using npm its a pacakage manager 

 // package.json is a file that has all the lst of pacakages we have downloaded so far in a particular
 //project, so create a pacakage json file in a floder where oru project is, using the comand
 npm  init //--two files will be craeted out of which one is pacakage.json that has an object that lists 
 //all the properties of the project, there is a property called dependencies that has all the pacakes downloaded
 // specifically for this project , the other file need not be touched

// two properties called dependencies and dev dependies 
// dependencies--- is used for production purpose not for development purpose
// dev depe... used for development purpose and not for productiob=n purpose
npm i express -dev// ---will put the pacakge in dev depenci
// to uninstall pacakages
npm uninstall express -dev // if the package is in dev
nom unnstall express// if not in dev
// to unnstall global pacakages
npm uninstall express -g

// list pacaakges locally 
npm list


 // when we download something globally we give npm i -g pakacge name
 // where g stands for global if we didnt give g then the pacake will be nstalled locally and we can't use in 
 //another project or floder


 // npm initi then we can go with default values orelse not, thats we can give our values
 npm set init-license "MIT" // so now the license name will be changed
 npm set init-author-name "MIT"//to set author name
 // since we are going with default values for tha json filw we can also since
 mpm initi --yes // so that a pacakage json with default values will be created

 // to ge the values using cmd prompt
 npm get init-license 
 npm get init-author-name 
 // to delete the author name

 npm config delete init-author-name
 npm config delete init-license

 // if a package is nstalled locally then the node_modules floder will automatically install in the, floder 
 //thats because since we hae downloaded a package locally all the other packages will also be downloaded 
 
 
 //now when we wanna share this project to anybody else we can just share the code files and the two files
 // created while ,creating a pacakge json,the node modu;e floder need nt be shared 
 // as , if the third person runs the pacakge json using
 npm install
 // all the pacakes in the package.json file will be downloaded for them