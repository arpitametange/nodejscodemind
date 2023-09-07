// const simple=require('./modulesecond.mjs')  //common js module
//simple()

// import { simple as simple23} from "./modulesecond.mjs" 
// simple23()

// import simple23 from "./modulesecond.mjs"  //this is in esm version
// simple23()

import * as a2 from "./modulesecond.mjs"
console.log(a2.simple());
console.log(a2.default());