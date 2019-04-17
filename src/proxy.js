const http = require('http');
const request = require('request');

const hostname='192.168.173.1';
const port = 10001;
const imgPort = 8081;

const apiServer = http.createServer((req,res) => {
    const url = 'http://news-at.zhihu.com/api/4'+ req.url;
    const options = {
        url,
    }
    const callback = (err,response,body) => {
        if(!err&&response.statusCode === 200){
            res.setHeader('Content-Type','text/plain;charset=UTF-8');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.end(body)
        }
    }

    request.get(options,callback)
})

apiServer.listen(port,hostname,()=> {
    console.log(`代理接口在代${hostname}:${port}运行`)
})

const imgServer = http.createServer((req,res) =>{
    const url = req.url.split('/img/')[1];
    const options = {
        url,
        encoding:null,
    }

    const callback = (err,response,body) => {
        if(!err&&response.statusCode===200){
            const contentType = response.header['content-type'];
            res.setHeader('Content-Type',contentType);
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.end(body)

        }
    }

    request.get(options,callback)

})

imgServer.listen(imgPort,hostname,()=>{
    console.log(`图片代理服务在${hostname}:${port}运行`)
})