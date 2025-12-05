const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
const QuoteItem = sequelize.define('QuoteItem', {
id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
quantity: { type: DataTypes.INTEGER, defaultValue: 1 },
unitPrice: { type: DataTypes.DECIMAL(12,2) },
discount: { type: DataTypes.DECIMAL(5,2), defaultValue: 0.0 }
}, { tableName: 'quote_items' });


return QuoteItem;
};
