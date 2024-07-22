const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json())

let tweets = [];
let idCounter = 1;

// mostrar tweet
app.get('/api/tweets', (req, res) => {
    res.json(tweets);
});

//publicar un tweet
app.post('/api/tweets', (req, res) => {
    const { username, content } = req.body;
    const newTweet = {
        id: idCounter++,
        username,
        content,
        likes: 0
    };
    tweets.push(newTweet);
    res.status(201).json(newTweet);
});

//agregar likes
app.post('/api/tweets/:id/like', (req,res) => {
    const tweetId = parseInt(req.params.id,10);
    const tweet = tweets.find(t => t.id === tweetId);
    console.log(tweet)
    if (tweet) {
        tweet.likes += 1;
        res.json(tweet)
    } else {
        res.status(404).json({ error: 'like no se encuentra'})
    }
});

//delete
app.delete('/api/tweets/:id', (req,res) => {
    const tweetId = parseInt(req.params.id, 10);
    console.log(tweetId)
    const tweetIndex = tweets.findIndex(t => t.id === tweetId);
    if (tweetIndex !== -1) {
        tweets.splice(tweetIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ error: 'Tweet no encontrado'})
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})