const express = require('express');
const router = express.Router();
const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


router.post('/login', async (req,res)=>{
const { email, password } = req.body;
const user = await User.findOne({ where: { email } });
if(!user) return res.status(401).json({error:'Invalid credentials'});
const ok = await bcrypt.compare(password, user.passwordHash);
if(!ok) return res.status(401).json({error:'Invalid credentials'});
const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '8h' });
res.json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role } });
});


module.exports = router;
