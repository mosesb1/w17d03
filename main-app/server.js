require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 3001;

const app = express();

const fib = (n) => {
    let x = 0, y = 1, z = 1
    while(n > z){
        x = y;
        y = z;
        z = x + y;
    }
    return n === z || n === 0;
}


app.get('/', (req,res) => {
    res.send('<h1>Fibonacci Express App</h1>');
})

app.get('/fibonacci/:num', (req,res) => {
    let num = parseInt(req.params.num);
    if(fib(num)) {
        res.send("<h1>Very Good. It is Fibonacci</h1>");
    } else {
        res.send("<h1>I can tell this is not a fibonacci number</h1>");
    }
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));