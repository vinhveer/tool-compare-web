const express = require('express');
const app = express();
const indexRouter = require('./routes/index');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});