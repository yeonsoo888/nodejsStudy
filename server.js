const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}));
const MongoClient = require('mongodb').MongoClient;

let db;
MongoClient.connect('mongodb+srv://admin:qwer1234@cluster0.rtid5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',(에러,client)=>{
    
    if(에러) return console.log(에러);

    db = client.db('todoapp');

    

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

    db.collection('counter').findOne({name: "게시물갯수"}, (err, result) => {
        const totalLength = result.totalPost;

        db.collection('post').insertOne({_id:totalLength , 할일 : req.body.title, 날짜 : req.body.date},(에러,결과) => {
            console.log("저장완료");
        });
    });

});