const express = require('express');
const logger = require('./utils/logger');
const app = express();

const cors = require('cors');
app.use(cors());

const blogRouter = require('./controllers/blogRouter');

app.use(express.json());
app.use("/api/blogs", blogRouter);


const { MONGODB_URI, PORT } = require('./utils/config');
const mongoose = require('mongoose');
logger.info("Connecting to MongoDB, URI:", MONGODB_URI);
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.info('error connecting to MongoDB:', error.message)
  })

module.exports = app;