const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const helmet = require('helmet');
require('dotenv').config();

const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
// app.use(helmet());
app.use(express.json());

// Routes
app.use('/api', routes);

// Default route for handling undefined routes
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message || 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err : {},
  });
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit process if connection fails
  });

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
