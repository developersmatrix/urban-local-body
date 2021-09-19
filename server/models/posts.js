import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    author: String,
    post: String
});

export default mongoose.model('Posts',PostSchema);