import mongoose from 'mongoose';

const postScheme = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required: false
    },
    link:{
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date().getDate()
    }
});

const PostMessage = mongoose.model('PostMessage', postScheme);
export default PostMessage;