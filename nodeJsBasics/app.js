//uses node module: http
//require statement searches for http then runs module scripts
const http = require('http');

//using dynamic value here and in the server.listen method
const port = 5050;

//createServer method creates an instance of Server class
//createServer argument is callback function that runs whenever user sends request
//response objects uses end method doing 2 tasks: end hanging state and send something to client
const server = http.createServer((req, res) => {
    //switch takes request path, which is property of req object, as req.url
    switch (req.url) {
        //and then set up endpoint cases and desired output
        case '/':
            //end method takes the return to the user as argument as String, or in this case HTML-string
            res.end(`
        <html>
        <head>
            <title>First node app</title>
        </head>
        <body>
            <h1>Welcome to my node app</h1>
        </body>
        </html>
        `);
        break;
        case '/admin':
            res.end(`
            welcome to the admin page
            `);
        break;
        case '/user':
            res.end(`
            welcome to the user page
            `);
        break;
        //if page doesn't load:
        default:
            res.end(`not found`);
    };
}
);

//this method takes port# as its first argument
//and a callback function as its second arg
//function runs when server starts listening on port #
server.listen(port, () => {
    console.log(`server is now listening on port ${port}`);
});

