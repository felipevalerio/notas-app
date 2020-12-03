const express = require('express');
const cors = require('cors');
const notesRouter = require('./routes/notes');

const app = express();
app.use(express.json());
app.use(cors());
app.use(notesRouter);

module.exports = app;