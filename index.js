// Jorrel Tigbayan
// 101329925

const user = require('./routes/user')
const emp = require('./routes/emp')
const errorHandler = require('./errorHandler')
const app = express();
const SERVER_PORT = process.env.port || 6130;

app.use(errorHandler)

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port ${SERVER_PORT}`);
});