const url=require('url')
const urrl='https://www.example.com:8080/path/to/resource?params=value&params2=value&params3=value'
let t=url.parse(urrl)
console.log('url port'+t.host);
console.log('url port'+t.protocol);
console.log('url port'+t.path);
console.log('url query == '+t.query);
console.log(`slashes: `+t.slashes)

const formurl=url.format({
   protocol:'https',
   host:'www.google.com',
   pathname:'prd/re/dg/d',
   port:8080,
   query:{
      params:'value1',
      params:"valuee2"
   }
   
})

console.log(formurl);