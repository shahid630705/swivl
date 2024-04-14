// app.js
const express = require('express');
const mongoose = require('mongoose');
const { PORT, MONGODB_URI } = require('./config');
const { errorHandler } = require('./utils/errorHandlers');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/diaryEntries', require('./
