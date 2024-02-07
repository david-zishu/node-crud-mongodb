const mongoose = require("mongoose");

// connect to mongodb
async function connectMongoDb(url) {
  return mongoose.connect(url);
}

module.exports = { connectMongoDb };
