const { pbkdf2 } = require('crypto');
const { createServer } = require('http');

const start = Date.now();

const hash = () => {
    pbkdf2('myPass', 'verySecretString', 1000, 1000, 'sha256', () => {
        console.log('Hash', Date.now() - start);
    });
};

const lis = () => {
    createServer().listen(3000, () => {
        console.log('listening', Date.now() - start);
    });
};

//the hash method runs 4 times, each takes about the same amount of time
//each hash() gets added to the call stack and the process gets added to libuv
//if there are more than 4, the extra takes about twice as long
hash();
hash();
hash();
hash();

//adding this method to the end transfers its call the underlying OS
//process continues to run bc server is now listening
lis();