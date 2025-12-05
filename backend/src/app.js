const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');

let userRoutes, hospitalRoutes, equipmentRoutes, quotationRoutes;

try { userRoutes = require('./routes/users'); } catch { userRoutes = null; }
try { hospitalRoutes = require('./routes/hospitals'); } catch { hospitalRoutes = null; }
try { equipmentRoutes = require('./routes/equipment'); } catch { equipmentRoutes = null; }
try { quotationRoutes = require('./routes/quotations'); } catch { quotationRoutes = null; }

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
if (userRoutes) app.use('/api/users', userRoutes);
if (hospitalRoutes) app.use('/api/hospitals', hospitalRoutes);
if (equipmentRoutes) app.use('/api/equipment', equipmentRoutes);
if (quotationRoutes) app.use('/api/quotations', quotationRoutes);

app.get('/api/health', (req, res) => res.json({ ok: true }));

module.exports = app;
