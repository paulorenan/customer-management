const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const CustomerRoute = require('./src/routes/CustomerRoute');

const app = express();


app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api/customer', CustomerRoute);


app.get('/', (req, res) => {
    res.send('Backend is running!');
});


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
