const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { sequelize } = require('./models');

const authRoutes = require('./routes/auth');
//const userRoutes = require('./routes/users');

// Optional routes
let hospitalRoutes, equipmentRoutes, quotationRoutes;
try { hospitalRoutes = require('./routes/hospitals'); } catch { hospitalRoutes = null; }
try { equipmentRoutes = require('./routes/equipment'); } catch { equipmentRoutes = null; }
try { quotationRoutes = require('./routes/quotations'); } catch { quotationRoutes = null; }

const app = express();
app.use(cors());
app.use(express.json());

// Always safe routes
app.use('/api/auth', authRoutes);
//app.use('/api/users', userRoutes);

// Only use optional routes if they exist
if (hospitalRoutes) app.use('/api/hospitals', hospitalRoutes);
if (equipmentRoutes) app.use('/api/equipment', equipmentRoutes);
if (quotationRoutes) app.use('/api/quotations', quotationRoutes);

// Health check
app.get('/api/health', (req, res) => res.json({ ok: true }));

module.exports = app;

