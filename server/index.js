import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postsRouter from './routes/posts.js';

const app = express();

app.use('/adminniy', postsRouter);
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
 
const CONNECT_URL = 'mongodb+srv://someoniy:uzbeK2003@cluster0.ry32y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECT_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}, bosovr!`)))
    .catch(err => {
        console.log("eee dalbayop\n"+err);
    }
);
//  