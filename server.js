const express = require('express');
const app = express();

app.listen(8080, function() {
    console.log('listening on 8080');
});

app.get('/pet',(req,res) => {
    res.send("펫용품 쇼핑할 수 있는 사이트 입니다.");
})