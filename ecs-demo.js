/**
 * Created by akumar13 on 7/8/17.
 */
'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    res.send('Hello ECS Demo');
});

app.listen(PORT, HOST);
console.log(`Running ECS Demo Server on http://${HOST}:${PORT}`);