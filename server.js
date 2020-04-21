const express = require('express');
const app = express()
const PORT = process.env.PORT;


app.use(express.static('directory-app/build'))

app.listen(PORT, () => console.log('listening on PORT', PORT))