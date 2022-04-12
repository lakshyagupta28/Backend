const http = require('http');
const port = 8000;
const fs = require('fs');

// Request listener:- This function gets executed every time the servers gets a request
// This has two parameters 
// 1. Request       2. Response
function requestHandler(req, res){
    console.log("The Url entered by user is",req.url);  // This will load the url to the console screen
    res.writeHead(200, {'content-type': 'text/html'}); // This tells the browser the type of response file

    
    let filePath;  // Var that stores the address of the file that is requested to the server
    // The switch statement tells if 
    if(req.url=='/')
            filePath = './index.html'
    else if(req.url=='/profile')
            filePath = './profile.html'
    else // default
            filePath = './404.html'    
    

    // File System module that sends the file to the browser ( Doubt here "How is data getting values")
    fs.readFile(filePath, function(err,data){
        if(err){
            console.log('error', err);
            return res.end('<h1>Error!</h1>');
        }
        return res.end(data); 
    })
    
}

const server = http.createServer(requestHandler);
// This turns our computer to the HTTP server.


// This creates a listener on the specified port or path 
// Port is a general path that is omitted generallyy
// That path identifies the specific resource that the client wants to access
server.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }

    console.log("Server is up and running on port:", port);
});