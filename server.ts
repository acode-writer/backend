const http = require('http');
const express_app = require("./app");


const port = process.env.PORT || 3000;
express_app.set('port', port);

const server = http.createServer(express_app);
server.on('listening', () => {
    // const address = server.address();
    console.log(`listening on http://localhost:${port}`);
});
server.listen(port);