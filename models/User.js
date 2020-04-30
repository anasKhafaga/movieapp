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

  checkExistence() { 
    return new Promise((resolve, reject) => { 

      dbCon('users', async (db) => {
        try {
          const user = await db.findOne({ '$or': [{ username: this.userData['username'] }, { email: this.userData['email'] }] });

          if (!user) {
            resolve({
              check: false
            })
          } else if (this.userData['username'] === user.username) {
            resolve({
              check: true,
              message: 'this username is already in use'
            })
          } else if (this.userData['email'] === user.email) {
            resolve({
              check: true,
              message: 'this eamil is already in use'
            })
          }
        } catch (err) {
          reject(err);
        }
      });

    });
  };

  static validate(userData) {
    return userValidator.validate(userData);
  };
  
};


module.exports = User;