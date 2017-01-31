// mongorito dependencies
const mongorito = require('mongorito');

//the connection URL
const DATABASE_URL = 'mongodb://cashUserDB:12345@ds137759.mlab.com:37759/heroku_wgs0m13f';

module.exports = mongorito.connect(DATABASE_URL);
