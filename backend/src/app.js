const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Optional routes – load only if they exist and are valid routers
const safeRequire = (path) => {
  try {
    const route = require(path);
    // Ensure the module exports a function (router) before using
    if (typeof route === 'function') {
      return route;
    }
    console.warn(`⚠️ Skipping ${path}: not a valid router export`);
    return null;
  } catch (err) {
    console.warn(`⚠️ Skipping ${path}: ${err.message}`);
    return null;
  }
};

const userRoutes = safeRequire('./routes/users');
const hospitalRoutes = safeRequire('./routes/hospitals');
const equipmentRoutes = safeRequire('./routes/equipment');
const quotationRoutes = safeRequire('./routes/quotations');

if (userRoutes) app.use('/api/users', userRoutes);
if (hospitalRoutes) app.use('/api/hospitals', hospitalRoutes);
if (equipmentRoutes) app.use('/api/equipment', equipmentRoutes);
if (quotationRoutes) app.use('/api/quotations', quotationRoutes);

// Health check
app.get('/api/health', (req, res) => res.json({ ok: true }));

module.exports = app;
