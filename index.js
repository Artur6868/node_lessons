const http = require('http');
const fs = require('fs');
const {e, fileName} = require('minimist')(process.argv.slice(2));

function writeHttp(num, dur, res) {
    res.writeHead(`${num}`, {
        'Contet-type': 'text/html;charset=utf-8'
    });
    res.write(`${dur}`)
    res.end();
  }


function creatFile(filename, ext, res) {
        fs.readFile(`./${filename}.${ext}`, 'utf-8', (err, data) => {
            let wdata = data;
            let statusCode = 200;
            if(err){
                wdata = 'File not found';
                statusCode = 404;
            } 
            writeHttp(statusCode, wdata,res)

        });
}

 http.createServer((req, res) => {
     
  if(e, fileName ){
    creatFile(fileName, e , res);
    
  }else{
      //-----------
      writeHttp(200, 'hello world',res)
  }
  //------------
  
}).listen(8080);


//-------------tnain-------------

//kardal http ptatakol 



//-----------------------------------------------------------------------
// const http = require('http');
// const server = http.createServer().listen(8080);

// server.on('request', (req, res) => {
//     res.writeHead(200, {
//         'Contet-type': 'text/html;charset=utf-8'
//     });
//     res.write('Hello')
//     res.end();
// });

// server.on('listening', () => {
//     console.log('Listening on port 8080');
    
// })
