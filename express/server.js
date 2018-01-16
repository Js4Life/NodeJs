var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer  = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}));

app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

app.post('/file_upload', function (req, res) {
   console.log(req.files.file.name);
   console.log(req.files.file.path);
   console.log(req.files.file.type);
   var file = __dirname + "/" + req.files.file.name;
   
   fs.readFile( req.files.file.path, function (err, data) {
      fs.writeFile(file, data, function (err) {
         if( err ){
            console.log( err );
            }else{
               response = {
                  message:'File uploaded successfully',
                  filename:req.files.file.name
               };
            }
         console.log( response );
         res.end( JSON.stringify( response ) );
      });
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})



















// var express = require('express');
// var app = express();

// app.use(express.static('public'));

// app.get('/index.html',function(req,res){
//     res.sendFile(__dirname + "/" + "index.html");
//     console.log(__dirname + "/" + "index.html");
// })

// app.get('/process_get',function(req,res){
//     response = {
//         first_name : req.query.first_name,
//         last_name:req.query.last_name
//     }
    
//     console.log(response);
//     res.send(JSON.stringify(response));
// })

// var server = app.listen(8081,function(){
//     var host = server.address().address;
//     var port = server.address().port;
//     console.log('Exmaple app listening at http://%s:%s',host,port)
// })

































// var express = require('express');
// var app = express();

// app.use(express.static('public'));

// app.get('/',function(req,res){
//     res.send('Hello World');
// })

// var server = app.listen(8081,function(){
//     var host = server.address().address;
//     var port = server.address().port;
//     console.log('example for listening at http://%s:%s',host,port);
// })

















































// var express = require('express');
// var app = express();

// app.get('/',function(req,res){
//     console.log('got a GET');
//     res.send('Hello GET');
// })

// app.post('/',function(req,res){
//     console.log('Got a POST request for the homepage');
//     res.send('Hello POST');
// })

// app.delete('/del_user',function(req,res){
//     console.log('Got a DELETE Request for /del_user')
//     res.send('Hello DELETE');
// })

// app.get('/list_user',function(req,res){
//     console.log('got a GET Request for /list user');
//     res.send('Page Listing');
// })

// app.get('/ab*cd',function(req,res){
//     console.log('Got a GET request for /ab*cd');
//     res.send('Page Pattern Match');
// })

// var server = app.listen(8081,function(){
//     var host = server.address().address
//     var port = server.address().port
//     console.log('Example ap listening at http://%s:%s',host,port)
// })















// var express = require('express');

// var app = express();

// app.get('/',function(req,res){
//     console.log(req);
//     console.log(res)
//     res.send('Hello worldz');
// })

// var server = app.listen(8081,function(){
//     var host = server.address().address;
//     var port = server.address().port;
//     console.log('example app listening at http://%s:%s',host,port);
// })