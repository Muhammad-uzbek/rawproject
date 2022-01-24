import express from 'express';

import { getAllPosts, createPost, updatePost, deletePost } from '../controllers/posts.js';
const router = express.Router();

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// get all posts
router.get('/', getAllPosts);
// create post
router.post('/', createPost);
// update post
router.put('/:id', updatePost);
// delete post
router.delete('/:id', deletePost);

export default router; 