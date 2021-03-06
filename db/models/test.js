module.exports = (sequelize, DataTypes) => {
  const Test = sequelize.define('Test', {
    course_number: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    prof_name: {
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
    exam_start: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    exam_end: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      }
    },
    validated: {
      type: DataTypes.BOOLEAN,
      validate: {
        notEmpty: true,
      }
    },
    confirmed: {
      type: DataTypes.BOOLEAN,
      validate: {
        notEmpty: true,
      }
    },
    date: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      }
    },
    student_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      }
    }
  });
  return Test;
}
