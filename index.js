import express from 'express'
import 'dotenv/config'
import connectDB from './db.js'

import users from './modules/User.js'
import posts from './modules/Posts.js'
import comments from './modules/Comments.js'

const app = express();
const port = 3000;

app.use(express.json())

app.get('/Users', async (req,res)=>{
   res.send('hello world')
})

app.listen(port,()=>{
    console.log('listening on port: ',port)
})