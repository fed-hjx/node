let path = require('path');
let filepath = '/tmp/demo/js/test.js';

console.log('文件夹路径', path.dirname(filepath));

console.log('文件全称', path.basename(filepath));

console.log('文件名', path.basename(filepath, '.js'));

console.log('扩展名', path.extname(filepath, '.js'));

console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'))