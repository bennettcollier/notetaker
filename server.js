const express = require('express');
const fs = require('fs');
const path = require('path');

const htmlRoutes = require('./routes/htmlRoutes.js');
const apiRoutes = require('./routes/apiRoutes.js');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}`)
});