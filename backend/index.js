const express = require('express');
const app = express();


app.use(express.json());


app.get('/', (req, res) => {
    res.send('Backend is running!');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});