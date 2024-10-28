const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const validCredentials = [
    { username: 'aledeaux', password: process.env.ALEDEAUX_PASSWORD },
    { username: 'RSNOW', password: process.env.RSNOW_PASSWORD },
    { username: 'OB', password: process.env.OB_PASSWORD },
];

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const isValid = validCredentials.some(account => account.username === username && account.password === password);

    if (isValid) {
        res.status(200).send('Login successful');
    } else {
        res.status(401).send('Invalid credentials');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});