const functions = require('firebase-functions');
const cors = require('cors')

const app = require('express')()
app.use(cors({ origin: true }))

//File imports
const { login, signup } = require("./user");
const { user, getUser } = require('./user/user')
const { interviews, postInterview, updateInterview, deleteInterview } = require('./user/interviews')

const authMiddleware = require('./utils/authMiddleware')

app.get('/', (req, res) => {
    res.send("Not a valid route for this API")
})
app.post('/signup', signup)
app.post('/login', login)
app.post('/user', authMiddleware, user)
app.get('/user', authMiddleware, getUser)

app.get('/user/interviews', authMiddleware, interviews)
app.post('/user/interview', authMiddleware, postInterview)
app.patch('/user/interview', authMiddleware, updateInterview)
app.delete('/user/interview', authMiddleware, deleteInterview)

exports.api = functions.region('asia-east2').https.onRequest(app)
