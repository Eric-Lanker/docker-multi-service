const express = require('express');
const app = express();

app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the Backend!' });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
