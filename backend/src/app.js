const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Route imports
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');

// Optional routes (may be empty)
let hospitalRoutes, equipmentRoutes, quotationRoutes;
try { hospitalRoutes = require('./routes/hospitals'); } catch {}
try { equipmentRoutes = require('./routes/equipment'); } catch {}
try { quotationRoutes = require('./routes/quotations'); } catch {}

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Only use optional routes if they exist
if (hospitalRoutes) app.use('/api/hospitals', hospitalRoutes);
if (equipmentRoutes) app.use('/api/equipment', equipmentRoutes);
if (quotationRoutes) app.use('/api/quotations', quotationRoutes);

// Health check
app.get('/api/health', (req, res) => res.json({ ok: true }));

module.exports = app;
