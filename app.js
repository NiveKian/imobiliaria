const express = require('express');


const app = express();
app.use(express.json());
const port = 8000;


app.get('/', (req, res) => {
    res.send('Hello World!');
})



app.listen(port, () => {
    console.log(`Escutando a porta ${port}`);
})