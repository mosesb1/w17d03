require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

// i did the bug part last time so i am going to skip that

app.get('/', (req,res) => {
    res.send('<h1>99 Bottles of beer on the wall</h1><br/><a href="/98">Take one down, pass it around</a>');
})

app.get('/:number_of_bottles', (req,res) => {
    const bottles = parseInt(req.params.number_of_bottles);
    if(!bottles) {
        res.send(`<a href='/'>Start Over</a>`);
        return;
    }
    res.send(`<h1>${bottles} bottles of beer on the wall</h1><br/><a href='/${bottles-1}'>Take one down, pass it around</a>`);
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
