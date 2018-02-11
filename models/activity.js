const Activity = sequelize.define('activity', {
  duration: {
    type: Sequelize.INTEGER
  }
});

Activity.hasOne(ActivityType);
