const express = require('express');
const app = express();
let server = null;

app.all('/hello2/', (req, res) => {
    res.write('hello');
    res.end();
})

app.all('/exit/', (req, res) => {
    res.write('exit');
    res.end();
    server.close(() => { console.log("HTTP Server is offline!") });
})



const port = process.env.PORT || 8080;
server = app.listen(port, () => {
    let nowDate = new Date(Date.now()).toLocaleString('en-ZA', { timeZone: 'Asia/Taipei' });
    console.log(`HTTP Server is online, port: ${port}! ${nowDate}`);
});


