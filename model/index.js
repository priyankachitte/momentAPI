const dbConfig = require("../config/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.users = require("./users.model")(mongoose);
db.moments = require("./monent.model")(mongoose);
module.exports = db;
