var request = require('superagent');
// extend with Request#proxy()
require('superagent-proxy')(request);

// HTTP, HTTPS, or SOCKS proxy to use
var proxy = 'http://192.168.145.72';
request
.get('http://x.360buyimg.com/js/version/201806/jdzt.adx.addAd.43124e68e4c713f0983e.js')
.redirects(0) // 防止页面重定向
.proxy(proxy)
.end((err, res) => {
	console.log(res);
	if (+res.status === 200) {
        // resolve(f);
    }
    else {
        // resolve();
   	}
});


// var fs = require('fs');

// console.log(fs.statSync('E:\\workspace\\ads_sz_dev.express_newfoward_proj\\static\\js\\jdzt\\dist\\js\\version\\201806\\jdzt.adx.addAd.43124e68e4c713f0983e.js'))