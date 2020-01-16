import express from 'express'
import createError from 'http-errors'
import logger from 'morgan'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import session from 'express-session'
import passport from 'passport'

import passportMiddleware from '~middleware/passport'
import keys from '~config/keys'

// IMPORT ROUTES
import indexRouter from '~routes/index'
import authRouter from '~routes/auth'

const app = express()
const MongoStore = require('connect-mongodb-session')(session)

// MONGOOSE
mongoose.Promise = global.Promise
mongoose.connect(
    keys.MONGODB_URI,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
)
.then(() => console.log('MongoDB connected.'))
.catch(error => console.log(error))


// STORE
const store = new MongoStore({
    collection: 'sessions',
    uri: keys.MONGODB_URI
})

// EXPRESS MIDDLEWARE
app.use(passport.initialize())


app.use(express.json())
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))
app.use(session({
    secret: 'some secret value',
    resave: false,
    saveUninitialized: false,
    store
}))
app.use(logger('dev'))
passportMiddleware(passport)

// ROUTER
app.use('/api/', indexRouter)
app.use('/api/auth', authRouter)

// ERROR 404
app.use(function (req, res, next) {
    next(createError(404))
})

// LISTEN PORT
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`App lisening o ${PORT}`)
})