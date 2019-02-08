var http=require('http');
var server=http.createServer( function(request,response){
   console.log(request.url);
    response.end("<h1>hello world</h1>");
});
server.listen(9888, function() {
   console.log("Server Started");
});
