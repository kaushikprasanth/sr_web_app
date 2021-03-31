const { Sequelize,DataTypes } = require('sequelize');
const db = require('../config/db');

const ServiceRequest = db.define('ServiceRequest', {
	id:{
		type: DataTypes.UUID,
	    defaultValue: Sequelize.UUIDV4,
	    primaryKey: true
	},
	buildingCode: {
		type: DataTypes.STRING,
		allowNull: false
	},
	description: {
		type: DataTypes.STRING,
    	allowNull:false
	},
	currentStatus:{
		type: DataTypes.ENUM(['NotApplicable', 'Created', 'InProgress', 'Complete', 'Canceled']),
		defaultValue: 'Created',
	},
	createdBy: {
		type: DataTypes.STRING,
		allowNull:false
	},
    lastModifiedBy: {
		type: DataTypes.STRING,
		allowNull:false
	},
    createdAt:"createdDate",
    updatedAt:"lastModifiedDate"
});

module.exports = ServiceRequest
