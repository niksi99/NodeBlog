const mongoose = require('mongoose');

mongoose.connect(process.env.DBURL, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", ()=> console.log("connect to the db"))

module.exports = db;