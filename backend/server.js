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
// app.use(cors());
// app.use(cors({
//   origin: `${process.env.FRONT}`
// }));
 
app.use(cors());
// Connect to DB
// connectDB();
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://vishalnishad0809_db_user:6DzGa1MkK1atJqcG@cluster0.cv5jzgt.mongodb.net/?appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit if MongoDB connection fails
  }
};
 connectDB();
// Routes
app.use('/', serviceRoutes);
 
app.use('/quotations', quotationRoutes);

app.use('/api', inquiryRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
