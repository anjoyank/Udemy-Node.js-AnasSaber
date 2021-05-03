const { pbkdf2 } = require('crypto');

const start = Date.now();

pbkdf2('pass', 'mySecret', 10000, 1000, 'sha256', () => {
    console.log('done', Date.now() - start);
});

console.log('I would be called first', Date.now() - start);