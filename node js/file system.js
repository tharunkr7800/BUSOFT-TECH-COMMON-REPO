// to work with fles we use this module or to read ans write from file
// there are two methods to read and write from file sync and asyn
// sync --> only after reading the file the control moves to the next steps
// asyn performs other steps whle reading or writing from the file
const fs = require('fs');

let data = fs.readFileSync('sample.txt','utf-8');// for reading sunchrnously
console.log(data);
console.log('data has been read successfully now');
// the ctrl will print this only after reading the data from the file 
// but asynchrously we can print this even before reading data from the file
let data1 = fs.readFile('sample.txt','utf-8',(err,content)=>{
if(err){
    console.log(err);
}else{
    console.log(content);
}
});
// takes three arguments options arg is  -->optional, and a call back function, called when the data is read successfully 
console.log('data has been read successfully now by an asynchronus function');
// now if we see the output this wll be printed before the content of the file
// beacuse the ctrl moves to this before the file finishes reading the data or while waiting for the resource to be allocated
// write 

let datawrite="hello nihaa";
fs.writeFileSync('writeinto.txt',datawrite);
console.log('executed after writng the data ompletely into the file');
// now check the variations see the output

let data2 ="hello madhu"
fs.writeFile('writeinto.txt',data2,()=>{
    console.log('data written successfully');
})
// notice in the file hello madhu will be there 

// read and write into files

fs.readFile('sample.txt','utf-8',(err,s_data)=>{// this func will be called only after all data has been read
    if(err){console.log(err);}
    else{
    fs.writeFile('sample1.txt',s_data,'utf-8',()=>{
        console.log("written")});
    } 
})
// to delete a fi;e use unlink sync and asyn we see asyn here

fs.unlink('writeinto.txt',()=>{// path and call back function
    console.log('data has been deleted successfully now');
});

// to create a directory and create a file inside the directory

fs.mkdir('node js',()=>{
    console.log('directory has been created');
    fs.writeFile('node js/writeinto.txt',data2,'utf-8',()=>{console.log('a file inside a directory has been created');})
});
// give the full path whle creating the file inside the dir
// a directory can be deleted only when its empty if not it cant be deleted so to delete a dir first delete 
//or move the  files inside the dir then use rmdir to delete the dir

// we can slo rename a file see google

// stats will give the info about a file
fs.stat('sample.txt',(err,stats)=>{// s
    if(err){
        console.log(err);
    }else{
        console.log(stats);
        console.log(stats.isDirectory());
        console.log(stats.isFile());// can be checked
    }
});


// to opena file
fs.open('nodejs/sample.txt','r',(err,fd)=>{// path, flag to read, write or append then a call back function
if(err){
    console.log(err);
}else{
    console.log("file opened");
    let read = fs.readFile(fd,'utf-8',(err1,data3)=>{
            // function after reading the file
    })
}

})
// for asyn type we use call back function