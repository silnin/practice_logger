const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  status: {
    type: Sequelize.STRING
  }
});

User.hasMany(ActivityType, {as: 'activityTypes'});
User.hasMany(Activity, {as: 'activities'});

// force: true will drop the table if it already exists
User.sync({force: true}).then(() => {
  // Table created
  return User.create({
    firstName: 'Peter',
    lastName: 'Keizer',
    email: 'gft_bak@hotmail.com',
    password: 'H0pS4S4',
    status: 'enabled'
  });
});
