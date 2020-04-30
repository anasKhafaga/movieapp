const { dbCon } = require('../configuration')

class User { 
  constructor(userData) { 
    this.userData = { ...userData };
  };

  save() { 
    dbCon('users', (db) => { 
      db.insertOne(this.userData);
    });
  }
};

const user = new User({
  username: 'anasSaber',
  email: 'anas@example.com',
  password: 'anas1234',
  first_name: 'Anas',
  last_name: 'Saber'
});

user.save();