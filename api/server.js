const express = require('express');
const app = express();
const PORT = 3001;

app.post('/barbers', (req, res) => {
    res.json({});
});


app.get('/barbers', (req, res) => {
    res.json({});
});

app.listen(PORT, () => console.log(`server up and running ${PORT}`));
