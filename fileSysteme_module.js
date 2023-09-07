const fs=require('fs')
// fs.readFile('file.txt','utf8',(err,data)=>{
//     console.log(err,data);
// })     ///non blocking i/o model

const f=fs.readFileSync('file.txt') /// for blocking intentionally 
console.log(f.toString());
console.log('finishing reading file');

// fs.writeFile('file.txt','this is the data',()=>{
//     console.log('finished writing file');
// })

const b=fs.writeFileSync('fil.txt','this is the text daata')
console.log(b);
console.log('finising reading file');
fs.writeFile('newfile','==arpita',()=>{
    console.log('');
})

