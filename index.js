// const http = require('http');
// const fs = require('fs');

// /**
//  * @function sendData
//  * send html data to client
//  * 
//  * @param {Object} res - response object
//  * @param {String} data - html content
//  * @param {Number} statusCode - http status code
//  */

// function sendData(res, data, statusCode = 500) {
//     res.writeHead(500, {
//         'Content-Type': 'text/html'
//     });
//     res.write(data);
//     res.end();
// }

// function senddataToclient(res, fileName = 'index.html', statusCode = 200) {
//     fs.readFile(fileName, 'utf8', (err, data) => {
//         if(err){
//             return sendData(res, '<h1>500</h1>')
//         }
//         sendData(res, data, statusCode)

//     });
//      res.writeHead(statusCode, {
//          'Content-Type': 'text/html'
//      });
    

//      fs.readFile(fileName, 'utf8', (err, data) =>{
//         res.write(data);
//         res.end;
//      })
// };

// http.createServer((req, res) => {
//     switch (req.url) {
//         case '/':
//             senddataToclient(res);
//             break;
//             case '/news':
//                 senddataToclient(res, 'news.htm');
//             break;
//             case '/concat':
//                  senddataToclient(res, 'concat.html');
//             break;
//         default:
//             senddataToclient(res, '404.html', 404);

//     }
//     console.log(req.url);
    
// }).listen(8080);

// http.createServer((req, res) => {
//     res.writeHead(500, {
//                  'Content-Type': 'text/html'
//              });
//              res.write('4545454<br>');
//              res.end('bobobobo');
// }).listen(8080);


const http = require('http');
const fs = require('fs');
const url = require('url');

const sendData = (fileName, res) => {
    fs.readFile(`${fileName}.html`, 'utf-8', (err, data) => {
        try{
            if (err) {
                throw err
            } 
            res.end(data);
        }catch(err){
            res.write(err.message);
            res.end()
        }
    });
};

http.createServer((req, res) => {
    res.writeHead(200);

    const { query: { page } } = url.parse(req.url, true);
    
    switch(page) {
        case 'home': sendData('index', res); break;
        case 'contact': sendData('concat', res); break;
        case 'news': sendData('new', res); break;
        default: sendData('404', res); break;
    }
    
}).listen(8080);


// git config --global user.name "name"
// git config --global user.email "email"







// http://localhost:8080/?page=home - home page
// http://localhost:8080/?page=contact - contact page
// http://localhost:8080/?page=news - news page
// http://localhost:8080/?page=dfgsrdtgs - 404 page

// function sendData(res, data, statusCode = 500) {
//         res.writeHead(500, {
//             'Content-Type': 'text/html'
//         });
//         res.write(data);
//         res.end();
//     }
    
//     function senddataToclient(res, fileName = 'index.html', statusCode = 200) {
//         fs.readFile(fileName, 'utf8', (err, data) => {
//             if(err){
//                 return sendData(res, '<h1>500</h1>')
//             }
//             sendData(res, data, statusCode)
    
//         });
//          res.writeHead(statusCode, {
//              'Content-Type': 'text/html'
//          });
        
    
//          fs.readFile(fileName, 'utf8', (err, data) =>{
//             res.write(data);
//             res.end;
//          })
//     };
    
//     http.createServer((req, res) => {
//         switch (page) {
//             case 'home':
//                 senddataToclient(res);
//                 break;
//                 case 'news':
//                     senddataToclient(res, 'news.html');
//                 break;
//                 case 'concat':
//                      senddataToclient(res, 'concat.html');
//                 break;
//             default:
//                 senddataToclient(res, '404.html', 404);
    
//         }
//         console.log(req.url);
        
//     }).listen(8080);
    
   