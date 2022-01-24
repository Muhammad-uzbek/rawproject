import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import postsRouter from './routes/posts.js';

const app = express();

app.use('/adminniy', postsRouter);
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors()); 
const CONNECT_URL = 'mongodb+srv://someoniy:uzbeK2003@cluster0.ry32y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;
const client = new MongoClient(CONNECT_URL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect(CONNECT_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}, bosovr!`)))
    .catch(err => {
        console.log(err);
    }
);
// send message to client via express
app.get('/', (req, res) => {
    res.send(JSON.stringify([{
        message: 'Hello World!',
        date: new Date(),
        context: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    }]))
});
app.post('/test', (req, res) => {
    console.log(req.body);
    //save req.body to database via mongoose
    res.send(JSON.stringify(req.body));
    try{
        client.connect(err => {
            const collection = client.db("allSlides").collection("posts");
            collection.insertOne(req.body);
        });
    }
    catch(err){
        console.log(err);
    }
});
app.get('/getallslides', (req, res) => {
    try{
        client.connect(err => {
            const collection = client.db("allSlides").collection("posts");
            collection.find({}).toArray(function(err, result) {
                if (err) throw err;
                res.send(JSON.stringify(result));
            });
        });
    }
    catch(err){
        console.log(err);
    }
});
//create a function that will get data from the database and display it on the page
const getData = async () => {
    try{
        client.connect(err => {
            const collection = client.db("allSlides").collection("posts");
            collection.find({}).toArray((err, result) => {
                console.log(result);
            });
        });
    }
    catch(err){
        console.log(err);
    }
}
getData();
app.get('/test', (req, res) => {
    console.log(req.body);
    res.send(JSON.stringify(req.body));
});
