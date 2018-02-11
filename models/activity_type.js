const ActivityType = sequelize.define('activity_type', {
  title: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  default_duration: {
    type: Sequelize.INTEGER
  }
});

//ActivityType.belongsTo(User);

