const http = require('http');
const request = require('request');

const hostname='localhost';
const port = 10002;
const imgPort = 8089;

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
    console.log(url)
    const options = {
        url,
        encoding:null,
    }

    const callback = (err,response,body) => {
        if(!err&&response.statusCode===200){
            console.log(response.headers)
            const contentType = response.headers['content-type'];
            res.setHeader('Content-Type',contentType);
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.end(body)

        }
    }

    request.get(options,callback)

})

imgServer.listen(imgPort,hostname,()=>{
    console.log(`图片代理服务在${hostname}:${imgPort}运行`)
})