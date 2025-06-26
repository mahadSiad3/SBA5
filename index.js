import express from 'express'
import 'dotenv/config'
import connectDB from './db.js'

import users from './modules/User.js'
import posts from './modules/Posts.js'
import comments from './modules/Comments.js'
import mongoose from 'mongoose'


const app = express();
const port = 3000;
await mongoose.connect(process.env.MONGO_URL)

app.use(express.json())




app.get('/users', async (req,res)=> {
    try {
        const user = await users.find({});
        res.json(user);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/users/:id', async (req,res)=>{
    try {
        const user = await users.findById(req.params.id);
        res.json(user)
    } catch (err) {
        res.status(500).send(err)
    }
})

app.get('/posts', async (req,res)=> {
    try {
        let query = {};
        const allPosts = await posts.find(query);
        res.json(allPosts);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/posts/:id', async (req,res)=> {
    try {
        const post = await posts.findById(req.params.id);
        res.json({ posts: post })
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/comments',async (req,res)=> {
    try {
        const allComments = await comments.find({});
        res.json(allComments);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/comments/:id', async (req,res)=>{
 try {
        const comment = await comments.findById(req.params.id);
        res.json({ comments: comment })
    } catch (err) {
        res.status(500).send(err);
    }

    
})

app.post('/users', async (req,res)=> {
    try {
        const user = new users(req.body);
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(400).send(err);
    }
});

app.post('/posts', async (req,res)=> {
    try {
        const post = new posts(req.body);
        const savedPost = await post.save();
        res.status(201).json(savedPost);
    } catch (err) {
        res.status(400).send(err);
    }
});



app.post('/comments', async (req,res)=> {
    try {
        const comment = new comments(req.body);
        const savedComment = await comment.save();
        res.status(201).json(savedComment);
    } catch (err) {
        res.status(400).send(err);
    }
});


app.patch('/posts/:id', async (req,res)=> {
    try {
        const post = await posts.findByIdAndUpdate(req.params.id, req.body);
        res.json(post);
    } catch (err) {
        res.status(400).send(err);
    }
});

app.patch('/users/:id', async (req,res)=> {
    try {
        const user = await users.findByIdAndUpdate(req.params.id, req.body);
        res.json(user);
    } catch (err) {
        res.status(400).send(err);
    }
});

app.patch('/comments/:id', async (req,res)=> {
    try {
        const comment = await comments.findByIdAndUpdate(req.params.id, req.body);
        res.json(comment);
    } catch (err) {
        res.status(400).send(err);
    }
});


app.delete('/posts/:id', async (req,res)=> {
    try {
        await posts.findByIdAndDelete(req.params.id);
        res.sendStatus(204);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.delete('/comments/:id', async (req,res)=> {
    try {
        await comments.findByIdAndDelete(req.params.id);
        res.sendStatus(204);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.delete('/users/:id', async (req,res)=> {
    try {
        await users.findByIdAndDelete(req.params.id);
        res.sendStatus(204);
    } catch (err) {
        res.status(500).send(err);
    }
});






app.listen(port, () => {
    console.log('listening on port: ', port)
})