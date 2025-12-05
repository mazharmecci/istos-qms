const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
const Quotation = sequelize.define('Quotation', {
id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
reference: { type: DataTypes.STRING },
status: { type: DataTypes.ENUM('draft','submitted','won','lost'), defaultValue: 'draft' },
total: { type: DataTypes.DECIMAL(12,2), defaultValue: 0.0 }
}, { tableName: 'quotations' });


return Quotation;
};
