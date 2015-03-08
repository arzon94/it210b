/*********************************************************
This model connects to the 'images' table in your database.
This will be a similar connection to the users.js model also
found in this folder.  You will need to examine the database 
that you imported and add functionality to this file to allow
it to function like the users.js model.  Make sure that you 
export this model so that the data in it can be used in the 
controller.
*********************************************************/

var	db = require('../db.js'),
	Sequelize = db.Sequelize,
	sequelize = db.sequelize;

var  DataTypes = Sequelize;

var Images = sequelize.define('images', {
	imageId: {type: Sequelize.INTEGER, field: 'imageId', primaryKey: true, autoIncrement: true},
	imagePath: Sequelize.STRING,
	imageApproved: Sequelize.STRING,
	altText: Sequelize.STRING,
	userId: Sequelize.INTEGER,
	numLikes: Sequelize.INTEGER,
	createdAt: Sequelize.DATE,
	updatedAt: Sequelize.DATE
});

Images.sync({/*force:true*/}); 
//If you uncomment the force:true section then the images table in the database will be deleted and reset each time that the app is run.

exports.Images = Images;
