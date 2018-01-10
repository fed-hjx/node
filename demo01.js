const fs = require('fs');

fs.readFile('./files/index.html',(er,file)=>{
    console.log(er,file)
})

console.log('done')