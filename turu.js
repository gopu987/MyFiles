var http = require('http')
var url = require('url')

http.createServer(function(request, response){
  var pathname = url.parse(request.url).pathname
  console.log("Request received for " + pathname)
  if(pathname === "/hi"){
    response.writeHead(200,{'Content-Type':'text/plain'})
    response.write("Hi Welcome")
    response.end()
  }
  if(pathname === "/hello"){
    response.writeHead(200,{'Content-Type':'text/plain'})
    response.write("Hello Buddy")
    response.end()
  }
  else{
    response.write("404 Page not found")
    response.end()
  }
}).listen(8000)

console.log("Server started on local host 8000")