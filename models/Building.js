const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Building = db.define('Building', {
	buildingCode: {
		type: DataTypes.STRING,
		allowNull: false,
		primaryKey:true
	},
	name: {
		type: DataTypes.STRING,
		allowNull:false
	}
});

module.exports = Building
