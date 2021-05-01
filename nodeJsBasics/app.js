const http = require('http');

const port = 5050;


//create server endpoints and clumsily inject data
//will learn better ways in the future
const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
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
        default:
            res.end(`not found`);
    };
}
);

server.listen(port, () => {
    console.log(`server is now listening on port ${port}`);
});

