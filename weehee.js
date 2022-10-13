const express = require('express')
const app = express();

app.listen(9120, function(){
    console.log('ㅁㄴㅇㄹ')
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
});

app.get('/write', function(req, res){
    res.sendFile(__dirname + '/write.html')
});


