import express from 'express';

import { getAllPosts, createPost, updatePost, deletePost } from '../controllers/posts.js';

const router = express.Router();
// get all posts
router.get('/', getAllPosts);
// create post
router.post('/', createPost);
// update post
router.put('/:id', updatePost);
// delete post
router.delete('/:id', deletePost);

export default router; 