// Jorrel Tigbayan
// 101329925

const express = require('express');
const userRouter = require('./routes/user');
const empRouter = require('./routes/emp');
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

app.all('*', (req, res, next) => {
    const err = new Error(`${req.originalUrl} was not found. It may not exist.`);
    err.status = 'fail';
    err.statusCode = 404;

    next(err);
});

app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    res.status(err.statusCode).send({error: err.message});
});

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port http://localhost:${SERVER_PORT}`);
    console.log({sample_user_login: {"email": "sample@gmail.com", "password": "password123"}});
});