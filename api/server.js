// implement your server here
// require your posts router and connect it here
const express = require('express')
const postRouter = require('./posts/posts-router')

const server = express();

server.use(postRouter);

module.exports = server