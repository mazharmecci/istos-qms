require('dotenv').config();
const bcrypt = require('bcrypt');
const { sequelize, User } = require('../models');


async function create(){
await sequelize.authenticate();
await sequelize.sync();
const email = process.env.INIT_ADMIN_EMAIL || 'admin@istos.local';
const pass = process.env.INIT_ADMIN_PASS || 'Admin@1234';
const existing = await User.findOne({ where: { email } });
if(existing) { console.log('Admin exists:', email); process.exit(0); }
const hash = await bcrypt.hash(pass, 10);
const user = await User.create({ name: 'ISTOS Admin', email, role: 'admin', passwordHash: hash });
console.log('Admin created:', user.email);
process.exit(0);
}
create();
