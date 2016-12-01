var express = require('express');
var app = express();

app.use(express.static("./dev"));

// node 服务器
//app.listen(80,"192.168.123.120");

//app.listen(80,"127.0.0.1");

app.listen(82,"192.168.0.64");
// 家里笔记本
//app.listen(80,"192.168.1.105");