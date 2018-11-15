module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    first_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    last_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
  });

// Wil need for one-to-many tables
  // Post.associate = (models) => {
  //   models.Post.belongsTo(models.User);
  // }

  return User;
};
