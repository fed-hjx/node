var fs = require('fs');

var data = '';
// 读取文件流数据
var readerStream = fs.createReadStream('./files/read.txt');

// 设置编码为 utf8。
readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
readerStream.on('data', function (chunk) {
    data += chunk;
    console.log(data,'readerStreamOnDate')
});

readerStream.on('end', function () {
    console.log(data,'done');
});

readerStream.on('error', function (err) {
    console.log(err.stack);
});

var writerStream = fs.createWriteStream('./files/input.txt');
var wData = '测试写入数据 666 done';
// 使用 utf8 编码写入数据
writerStream.write(wData, 'UTF8');

// 标记文件末尾
writerStream.end();

// 处理流事件 --> data, end, and error
writerStream.on('finish', function () {
    console.log("写入完成。");
});

writerStream.on('error', function (err) {
    console.log(err.stack);
});
console.log("程序执行完毕",__filename,__dirname);