const PORT = 8888; //访问端口号8888
var http = require('http'); //引入http模块
var fs = require('fs'); //引入fs模块
var url = require('url');//引入url模块
var path = require('path');//引入path模块

// req : 从浏览器带来的请求信息
// res : 从服务器返回给浏览器的信息
var server = http.createServer(function(req,res){
    var pathname = url.parse(req.url).pathname;;

    var realPath = path.join('./', pathname);

    fs.readFile(realPath,function(err,data){
       
        if(err){
            //未找到文件
            res.writeHead(404,{
                'content-type':'text/plain'
            });
            res.write('404,页面不在');
            res.end();
        }else{
            //成功读取文件
            res.writeHead(200,{
                'content-type':'text/html;charset="utf-8'
            });
            res.write(data);
            res.end();
        }
    })
});
server.listen(PORT); //监听端口
console.log('服务成功开启，localhost:8888...');
