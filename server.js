const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}));
const MongoClient = require('mongodb').MongoClient;
app.set('view engine', 'ejs');

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

    ///db에서 찾아주세요
    db.collection('counter').findOne({name: "게시물갯수"}, (err, result) => {
        const totalLength = result.totalPost;
        
        ///db에 보내주세요
        db.collection('post').insertOne({_id:totalLength + 1 , 할일 : req.body.title, 날짜 : req.body.date},(에러,결과) => {
            console.log("저장완료");

            ///db에서 db 수정해주세요
            // $set == 바꿔주세요
            // $inc == 기존값에 더해주세요 (음수가능)
            db.collection('counter').updateOne({name: "게시물갯수"},{$inc :{ totalPost:1}}, (err,res) => {
                if(err) return console.log(err);
            });
        });
    });
});

app.get('/list',(req,res) => {
    db.collection("post").find().toArray((err,result) => {
        if(err) {return console.log(err)}
        console.log(result);
    });

    res.render('list.ejs');
})