// Jorrel Tigbayan
// 101329925
// URLs commented above routers

const express = require('express');
const userRouter = require('./routes/user');
const empRouter = require('./routes/emp');
const app = express();

app.use(express.json())
app.use(express.urlencoded())

app.route("/")
.get((req, res) => {
    res.send("Express on Vercel")
})

// routes/user.js
app.use('/api/v1/user', userRouter);

// routes/emp.js
app.use('/api/v1/emp', empRouter);

// Catches all non-existent URL requests
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

app.listen(6130, () => console.log("Server ready on port 6130."));

module.exports = app;