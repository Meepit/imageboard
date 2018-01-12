'use strict';
module.exports = (sequelize, DataTypes) => {
  var Thread = sequelize.define('Thread', {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
      timestamps: true,
      updatedAt: false} ,{
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
  });
  return Thread;
};
