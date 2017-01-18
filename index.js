//创建一个web服务器
var express = require('express');
var app = express();

//新加
var users = require("./lib/user.json");


app.set('port',process.env.PORT || 3008);


//新加
app.get("/users",function(req,res,next){
    res.send(JSON.stringify(users));
    res.end();
})



//设置端口号
app.listen(app.get('port'),function(){
    console.log('Express started on http://localhost:' + app.get('port') + ';press Ctrl-C to terminate.');
});



//logo
var path = require('path');
var favicon = require('serve-favicon');

app.use(express.static(__dirname + '/public'));//配置静态资源（静态资源：html   js css img）

app.use(favicon(path.join(__dirname,'public','favicon.ico')));




//定制404页面（中间件）
app.use(function(req,res){
    res.type('text/html');
    res.status(404);
    res.send('<span style="color:red">404 - Not Found</span>');
});



//定制500页面
app.use(function (err,req,res,next) {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');

});