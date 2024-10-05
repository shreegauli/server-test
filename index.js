const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Hello from Express',
        status: 200
    })
});

app.post('/', (req, res) => {
const {name} = req.body;
    console.log(name);
});

const port = 3002;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`); 
});
