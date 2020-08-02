
let express = require('express');
let server = express();

server.use(express.static('client'))

server.listen(3000, console.log('server is running on port 3000'))
