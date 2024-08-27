const express = require('express');
const mongoose = require('mongoose');
const Routes = require('./routes/route');

require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch((err) => {
    console.error('MongoDB connection error:', err);
  });

app.use('/api/v1', Routes);

app.listen(process.env.PORT || 3000, () => console.log(`Server started on port ${process.env.PORT}`));