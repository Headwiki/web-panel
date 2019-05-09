let mongoose = require('mongoose');

class Database {
  constructor() {
    this._connect()
  }

_connect() {
     mongoose.connect(process.env.DB_CONNECTION_STRING, { useNewUrlParser: true })
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error(`Database connection error: ${err}`)
       })
  }
}

module.exports = new Database()