// Jorrel Tigbayan
// 101329925

const express = require('express');
const userRouter = require('./routes/user');
const empRouter = require('./routes/emp');
const errorHandler = require('./errorHandler');
const app = express();
const SERVER_PORT = process.env.port || 6130;

app.use(express.json())
app.use(express.urlencoded())

app.route("/")
    .get((req, res) => {
        res.send("<h1>101329925 COMP 3123 Assignment 1</h1>")
    })

app.use('/api/v1/user', userRouter);

app.use('/api/v1/emp', empRouter);

app.use(errorHandler);

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port http://localhost:${SERVER_PORT}`);
});