const express = require('express');
const app = express()
const PORT = process.env.PORT || 3001;

app.use(express.static('client/build'))

app.listen(PORT, () => console.log('listening on PORT', PORT))