import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import Router from './route/router'
import connectDB from './config/connectDB'
import configViewEngine from './config/viewEngine'
require('dotenv').config()


const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors({origin: true}))

configViewEngine(app)
Router(app)

connectDB()

app.listen(port, () => {
    console.log(`Running succeed on ${port}`);
})