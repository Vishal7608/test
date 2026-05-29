const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const serviceRoutes = require('./routes/serviceRoutes');
const quotationRoutes = require('./routes/quotationRoutes');
const inquiryRoutes = require('./routes/inquiryRoutes');

require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://vishalnishad0809_db_user:6DzGa1MkK1atJqcG@cluster0.cv5jzgt.mongodb.net/?appName=Cluster0'
    );

    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB Error:', error.message);
    process.exit(1);
  }
};

connectDB();

// Routes
app.use('/', serviceRoutes);

app.use('/quotations', quotationRoutes);

app.use('/api', inquiryRoutes);

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});