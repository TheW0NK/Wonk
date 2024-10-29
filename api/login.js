const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const validCredentials = require('./credentials');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    console.log(`Login attempt: username=${username}, password=${password}`);
    const isValid = validCredentials.some(account => account.username === username && account.password === password);

    if (isValid) {
        console.log('Login successful');
        res.status(200).send('Login successful');
    } else {
        console.log('Invalid credentials');
        res.status(401).send('Invalid credentials');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});