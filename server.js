const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();
const availabilityRoutes = require('./routes/availabilityRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');

const app = express();
app.use(express.json());

// Connect to database
connectDB();

// Use routes
app.use('/auth', authRoutes);
app.use('/availability', availabilityRoutes);
app.use('/appointments', appointmentRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
