var dns = require('dns');

// dns.lookup('www.qq.com', function (err, address, family) {
//     if (err) throw err;
//     console.log('例子A: ' + address);
// });


var options = { all: true };

dns.lookup('qq.com', options, function (err, address, family) {
    if (err) throw err;
    console.log('例子B: ' + JSON.stringify(address));
});