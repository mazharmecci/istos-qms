const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const hospitalRoutes = require('./routes/hospitals');
const equipmentRoutes = require('./routes/equipment');
const quotationRoutes = require('./routes/quotations');


require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/hospitals', hospitalRoutes);
app.use('/api/equipment', equipmentRoutes);
app.use('/api/quotations', quotationRoutes);


// health
app.get('/api/health', (req,res)=>res.json({ok:true}));


module.exports = app;
