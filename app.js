

function printHello() {
    console.log('Hello world');
}

setInterval(printHello,2000);








// function printHelloWorld() {
//     console.log('Hello World');
// }

// var t = setTimeout(printHelloWorld,2000);

//  clearTimeout(t);









// console.log(__filename);
// console.log(__dirname);

// var fs = require('fs');
// console.log('going to delete directory');

// fs.rmdir('/home/ubuntu/Desktop/nodejs/test/',function(err){
//     if(err){
//         return console.error(err);
//     }
//     console.log('going to read directory /tmp');
//     fs.readdir('/home/ubuntu/Desktop/nodejs/',function(err,files){
//         if(err){
//             return console.log(err);
//         }
//         files.forEach(function(file){
//             console.log(file);
//         })
//     })
// })


// var fs = require('fs');


// fs.readdir('/home/ubuntu/Desktop/nodejs',function(err,files){
//     if(err){
//         return console.error(err);
//     }
//     files.forEach(function(file){
//         console.log(file);
//     })
// })

// console.log('Going to delete an existing file');
// fs.unlink('dummy.txt',function(err){
//     if(err){
//         return console.error(err);
//     }
//     console.log('FIle deleted successfully')
// })




















// var fs = require('fs');
// var buf = new Buffer(1024);

// console.log('Going to open an existing file')
// fs.open('input.txt','r+',function(err,fd){
//     if(err) {
//         console.log(err);
//     }
//     console.log('File truncated successfully and going to read the same file')
//     fs.read(fd,buf,0,buf.length,0,function(err,bytes){
//         if(err){
//             console.log(err);
//         }

//         if(bytes > 0){
//             console.log(buf.slice(0,bytes).toString())
//         }
//         fs.close(fd,function(err){
//             if(err){
//                           console.log(err);
//             }
//             console.log('file closed successfully')
  
//         })
//     })
// })




























// var fs = require('fs');
// var buf = new Buffer(1024);

// console.log('Going to open an existing file');
// fs.open('input.txt','r+',function(err,fd){
//     if(err) {
//         return console.error(err);
//     }
//     console.log('file opened successfully and going to read file');

//     fs.read(fd,buf,0,buf.length,0,function(err,bytes){
//         if(err){
//             console.log(err);
//         }
//         console.log(bytes + "bytes read");

//         if(bytes > 0) {
//             console.log(buf.slice(0,bytes-1).toString());
//         }
//     })
// })
















// var fs = require('fs');
// console.log('going to write into the existing file');

// fs.writeFile('input.txt','Simple Easy Learning nodejs',function(err){
//     if(err){
//         return console.error(err);
//     }

//     console.log('data written sucessfilly and lets read newsly written data');

//     fs.readFile('input.txt',function(err,data){
//         if(err){
//             return console.error(err);
//         }

//         console.log('async read: ' + data.toString());
//     })
// })



























// var fs = require('fs');
// console.log('going to get file info');

// fs.stat('input.txt',function(err,stats){
//     if(err){
//         return console.error(err);
//     }

//     console.log(stats);
//     console.log('got the file info successfullly');

//     console.log('isFIle' + stats.isFile());
//     console.log('isDIRECTORY' +stats.isDirectory());
// })










// var fs = require('fs');
// console.log('Going to open file!');

// fs.open('input.txt','r+',function(err,fd){
//     if(err){
//         return console.error(err)
//     }
//     console.log('file opened successfully');
// })




















// var fs = require('fs');
// fs.readFile('input.txt',function(err,data){
//     if(err){
//         return console.error(err);
//     }
//     console.log('async read:' + data.toString());
 
// });

//    // sync
//     var data = fs.readFileSync('input.txt');
//     console.log('sync read :'+ data.toString());
//     console.log('program ended');













// var fs = require('fs');
// var zlib = require('zlib');

// fs.createReadStream('input.txt')
// .pipe(zlib.createGzip())
// .pipe(fs.createWriteStream('input.txt.gz'))

// console.log('file compressed');










// var fs = require('fs');
// var readerStream = fs.createReadStream('input.txt');
// var writerStream = fs.createWriteStream('output.txt');

// readerStream.pipe(writerStream);
// console.log('program ended');








// var fs = require('fs');
// var data = 'Simple Easy Learning';

// var writeStream = fs.createWriteStream('input.txt');
// writeStream.write(data,'UTF-8');
// writeStream.end();
// writeStream.on('finish',function(){
//     console.log('write Completed');
// })
// writeStream.on('error',function(err){
//     console.log(err.stack);
// })
// console.log('prgm ended');



























// var fs = require('fs');
// var data = '';

// var readerStream = fs.createReadStream('input.txt');

// readerStream.setEncoding('UTF-8');

// readerStream.on('data',function(chunk){
//     data += chunk;
// })

// readerStream.on('end',function(){
//     console.log(data);
// })
// readerStream.on('error',function(err){
//     console.log(err.stack);
// })

// console.log('program ended');









// var buffer1 = new Buffer('Raghavendra');
// var buffer2 = buffer1.slice(0,4);
// console.log(buffer2.toString());
// console.log(buffer1.length);
// console.log(Buffer.isBuffer(buffer1));
// console.log(Buffer.concat(buffer1,buffer2))








// var buffer1 = new Buffer('ABC');
// var buffer2 = new Buffer('cdb');
// buffer1.copy(buffer2);
// console.log(buffer2.toString());


















// var buffer1 = new Buffer('ABC');
// var buffer2 = new Buffer('ABCD');
// var result = buffer1.compare(buffer2);

// if(result < 0) {
//     console.log(buffer1 + "comes before" + buffer2);
//     } else if(result == 0) {
//             console.log(buffer1 + "is same as" + buffer2);

//     } else {
//         console.log(buffer1 + "comes after " + buffer2);
//     }

// var buf = new Buffer('Simple Easy Learning');
// var json = buf.toJSON(buf);

// console.log(json);












// buf = new Buffer(26);

// for(var i=0;i<26;i++) {
//     buf[i] = i + 97;
// }

// console.log(buf.toString('ascii'));
// console.log(buf.toString('ascii',0,5));
// console.log(buf.toString('utf-8',0,5));
// console.log(buf.toString(undefined,0,5));










// buf = new Buffer(256);
// len = buf.write('Simple Easy Learnig');

// var buf = new Buffer(20);
// var len = buf.write('raghavendra');

// var buf = new Buffer([1,2,3,4]);
// len = buf.write('raghuxscasx');

// var buf = new Buffer('Simple Easy Learning','utf-8');
// len = buf.write('');

// console.log('Octets written : ' + len);









// var fs = require('fs');
// fs.readFile('input.txt',function(err,data){
//     if(err){
//         console.log(err.stack);
//        return; 
//     }
//     console.log(data.toString());
// })

























// var events = require('events');

// var eventEmitter = new events.EventEmitter();

// var connectHandler = function connected() {
//     console.log('connection sucessful');
//     eventEmitter.emit('data_received');
// }

// eventEmitter.on('connection',connectHandler);

// eventEmitter.on('data_received',function(){
//     console.log('data received successfully')
// });

// eventEmitter.emit('connection');
// console.log('program ended');









// var events = require('events');

// var eventEmitter = new events.EventEmitter();

// eventEmitter.on('eventName',eventHandler);

// eventEmitter.emit('eventName');



// var fs = require('fs');

// // var data = fs.readFileSync('input.txt');

// fs.readFile('input.txt',function(err,data){
//     if(err) return console.error(err);
//     console.log(data.toString());
// })

// console.log("Program ended");

















// var http = require('http');

// http.createServer(function(request, response){
//     response.writeHead(404,{'Content-type':'text/JSON'});
//     response.end('Hello world \n');
// }).listen(8081);

// console.log('Server running');

















// function grab(flag) {
//     var index = process.argv.indexOf(flag);
//     return (index === -1) ? null : process.argv[index+1];
// }
// var greeting = grab('--greeting');
// var user = grab('--user');

// if(!user || ! greeting) {
//     console.log('you blew it');
// } else {
//     console.log(`Welcome ${user},${greeting}`);
// }

// function grab(f){
//     console.log(process.argv.indexOf(f));
// }

// grab('--greeting');