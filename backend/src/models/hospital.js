const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
const Hospital = sequelize.define('Hospital', {
id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
name: { type: DataTypes.STRING, allowNull: false },
state: { type: DataTypes.STRING },
city: { type: DataTypes.STRING },
contactPerson: { type: DataTypes.STRING },
contactPhone: { type: DataTypes.STRING },
email: { type: DataTypes.STRING }
}, { tableName: 'hospitals' });


return Hospital;
};
