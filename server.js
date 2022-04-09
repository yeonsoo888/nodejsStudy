const express = require('express');
const app = express();

app.listen(8080, function() {
    console.log('listening on 8080');
});

app.get('/pet',(req,res) => {
    res.send("<h4>펫용품 쇼핑할 수 있는 사이트 입니다.</h4>");
})

app.get('/beauty',(req,res) => {
    res.send("<h4>뷰티용품을 쇼핑할 수 있는 사이트 입니다.</h4>");
})

app.get('/',(req,res) => {
    res.sendFile(__dirname + "/index.html");
})