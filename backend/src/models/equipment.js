const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
const Equipment = sequelize.define('Equipment', {
id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
model: { type: DataTypes.STRING, allowNull: false },
description: { type: DataTypes.TEXT },
unitCost: { type: DataTypes.DECIMAL(12,2) }
}, { tableName: 'equipment' });


return Equipment;
};
