const Sequelize = require('sequelize');
const sequelize = require('../config/db');


const User = require('./user')(sequelize);
const Hospital = require('./hospital')(sequelize);
const Equipment = require('./equipment')(sequelize);
const Quotation = require('./quotation')(sequelize);
const QuoteItem = require('./quoteItem')(sequelize);


// Associations
User.hasMany(Quotation, { foreignKey: 'createdBy' });
Quotation.belongsTo(User, { foreignKey: 'createdBy' });
Hospital.hasMany(Quotation);
Quotation.belongsTo(Hospital);
Quotation.hasMany(QuoteItem, { foreignKey: 'quotationId' });
QuoteItem.belongsTo(Quotation, { foreignKey: 'quotationId' });
QuoteItem.belongsTo(Equipment, { foreignKey: 'equipmentId' });


module.exports = { sequelize, User, Hospital, Equipment, Quotation, QuoteItem };
