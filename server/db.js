let mongoose = require('mongoose');

class Database {
  constructor() {
    this._connect()
  }

_connect() {
     mongoose.connect(`mongodb+srv://${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true`, { useNewUrlParser: true })
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error(`Database connection error: ${err}`)
       })
  }
}

module.exports = new Database()