import PostMessage from '../models/postMessage.js';

export const getAllPosts = async (req, res) => {
    try{
        const posts = await PostMessage.find({});
        res.status(200).json(posts);
    }
    catch(err){
        res.status(500).json({ message: err.message });
    }
};

export const createPost = async (req, res) => {
    const post = new PostMessage(req.body);
    try{
        await post.save();
        res.status(201).json(post);
    }
    catch(err){
        res.status(400).json({ message: err.message });
    }
};

export const updatePost = async (req, res) => {
    const post = await PostMessage.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(post);
}

export const deletePost = async (req, res) => {
    await PostMessage.findByIdAndRemove(req.params.id);
    res.send('post deleted');
}
