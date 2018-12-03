const express = require('express');
const app = express();
const port = 8888;


app.use(express.static('public'));
// app.get('/', (req, res) => res.send('Hi I am a nodemon server!'));

app.listen(port, () => console.log(`App is listening on port ${port}!`));