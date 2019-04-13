let mongoose = require('mongoose');

const server = 'testing:gnitset@testing-ce5yp.mongodb.net';
const database = 'test';

class Database {
  constructor() {
    this._connect()
  }

_connect() {
     mongoose.connect(`mongodb+srv://${server}/${database}?retryWrites=true`, { useNewUrlParser: true })
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error(`Database connection error: ${err}`)
       })
  }
}

module.exports = new Database()