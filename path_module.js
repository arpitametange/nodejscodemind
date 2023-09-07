//path = The node:path module provides utilities for working with file and directory paths.

const path=require('path')

const path1='mydir'
const path2='file.txt'

const fullPath=path.join(__dirname,path1,path2)
console.log('Joined path:'+fullPath);

//getting file extensions
const filename='example.html'
const extensions=path.extname(filename)
console.log('file extension: '+extensions);


const filepath="/home/user/documets/report.pdf"
const basename=path.basename(filepath)
console.log('basename: '+basename);

const dirname=path.dirname(filepath)
console.log('Directory Name:'+dirname);

// console.log(process.env.PATH);
const geet=require('./module')
console.log('geet ='+geet.id,geet.name);
