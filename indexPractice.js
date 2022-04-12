const http= require('http')
const port=8000
const fs=require('fs')

function requestHandler(req,res){
    console.log("The url entered by the user is",req.url)
    res.writeHead(200,{'content-type':'text/html'})

    let filePath;
    if (req.url=='/')
        filePath='./index.html'
    else if(req.url=='profile')
        filePath="./profile.html"
    else
        filePath="./404.html"

    fs.readFile(filePath,function(err,data){
        if(err)
        {
            console.log('-------Error------',err)
            return res.end('<h1>Error</h1>')
        }
        return res.end(data)
    })
}
const server=http.createServer(requestHandler);

server.listen(port,function(err){
    if(err)
    {
        console.log(err)
        return;
    }
    console.log("Server is running on the port:",port)
})