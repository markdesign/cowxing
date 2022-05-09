const express = require('express');
const process = require('process');

// support ctrl-c
process.on("SIGINT", function () {
    console.log("Application is being interrupted...");
    process.exit(0);
});

// support $ docker stop <container id>
process.on("SIGTERM", function () {
    console.log("Application is being terminated...");
    process.exit(0);
});

const app = express();
app.get('/', (req, res) => {
    res.send('Hello World !' )
})
app.listen(4000, () => {
    console.log('Listening');
});