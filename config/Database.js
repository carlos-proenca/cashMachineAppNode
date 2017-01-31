// mongorito dependencies
const mongorito = require('mongorito');

//the connection URL
const DATABASE_URL = 'mongodb://cashUserDB:12345@ds013966.mlab.com:13966/heroku_zfbbt2rg';

module.exports = mongorito.connect(DATABASE_URL);
