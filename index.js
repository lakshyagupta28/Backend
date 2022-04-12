

const fs = require('fs');
const http= require('http');
const port= 8000;

function requestHandler(req,res){
    console.log(req.url);
    res.writeHead(200,{'content-type': 'text/html'});

    let filePath;

    switch(request.url){
        case '/':
            filePath = './index.html';
            break;
        case '/profile':
            filePath = './profile.html';
        default:
            filePath = './404.html';
    }

    fs.readFile(filePath,function(err,data){
        if(err){
            console.log('error',err);
            return res.end('<h1> Error <h1>')
        }
        return res.end(data);
    })
}
const server= http.createServer(requestHandler);

server.listen(port,function(err){
    if(err)
    {
        console.log(err);
        return;
    }
    console.log("Server is up and running on port: ",port);
});

// local host = 127.0.0.1


// In the next part of this course we are going to store some variables on this file and will be sending them along 
// with the html file