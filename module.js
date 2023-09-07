//nodejs=

const exp = require('constants');
const m=require('os')
console.log('os name:'+ m.platform);
console.log('os archetecture: '+ m.arch());
console.log('os type: '+ m.type());
console.log('os release: '+ m.release());
console.log('os free memory: '+ m.freemem());
console.log('os total memory(bytes): '+ m.totalmem());
console.log('os default drive : '+ m.homedir);
console.log('os temparary directory: '+m.tmpdir);
console.log('os hostname: '+ m.hostname);

const object={
    name:'arpita',
    id:12
}
module.exports=object
