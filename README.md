# SBA5
A simple RESTful API for managing users, anime-related posts, and comments. Built with Node.js, Express, and MongoDB using Mongoose for schema validation and relationships. Thunder Client / Postman for testing

users 

GET /users – List all users
POST /users – Create new user
PATCH /users/:id – Update user
DELETE /users/:id – Delete user

posts

GET /posts – List all posts 
GET /posts/:id – Get single post with comments
POST /posts – Create new post
PATCH /posts/:id – Edit a post
DELETE /posts/:id – Delete a post
POST /posts/:id – Add a comment to a post (custom route)

 Comments

GET /comments – List all comments
POST /comments – Create comment
PATCH /comments/:id – Edit comment
DELETE /comments/:id – Delete comment