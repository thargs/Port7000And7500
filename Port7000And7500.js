//Require HTTP
var http = require('http');

// Define a port to listen for incoming requests
var PORT7000 = 7000;
var PORT7500 = 7500;

////////////////////////////
//create a generic function to handle requests and responses
function handleRequest(request, response) {
//send the below string to the client when the user visits the PORT URL
    response.end('You are GOOD!' + request.url);

}

//use the Node HTTP package to create our server.
//Pass the handleRequest functio to empower it with functionality
var server = http.createServer(handleRequest);

//start our server so that it can begin listening to client reqiests
server.listen(PORT7000, function(){


    //log (server-side) response when server is running.
    console.log('Server listening on : http//localhost: ' + PORT7000);

});

///////////////////////////

function handleRequest2(request, response) {
    response.end('You are FUNNY! ' + request.url);
}

var server = http.createServer(handleRequest2);

server.listen(PORT7500, function(){

    console.log('Server listening on : http//localhost: ' + PORT7500);

});