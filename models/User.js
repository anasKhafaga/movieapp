const { dbCon } = require('../configuration')
const { userValidator } = require('../validator');

class User { 
  constructor(userData) { 
    this.userData = { ...userData };
  };

  save() { 
    dbCon('users', (db) => { 
      db.insertOne(this.userData);
    });
  }

  static validate(userData) {
    return userValidator.validate(userData);
  };
  
};

const userData ={
  username: 'anasSaber',
  email: 'anas@example.com',
  password: 'anas-1234',
  first_name: 'Anas',
  last_name: 'Saber'
};

const validation = User.validate(userData);