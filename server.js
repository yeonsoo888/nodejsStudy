const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}));

const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb+srv://admin:qwer1234@cluster0.rtid5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',(에러,client)=>{
    app.listen(8080, function() {
        console.log('listening on 8080');
    });
})





app.get('/',(req,res) => {
    res.sendFile(__dirname + "/index.html");
})

app.get('/write',(req,res) => {
    res.sendFile(__dirname + "/write.html");
})

app.post('/add', function(req, res){
    res.send('전송완료');
    console.log(req.body.title);
});