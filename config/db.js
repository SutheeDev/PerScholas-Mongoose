const mongoose = require("mongoose");

const conn = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    mongoose.connection.once("open", () => {
      console.log("connected to mongodb");
    });
  } catch (error) {
    console.log(`Something went wrong : ${error.message}`);
  }
};

module.exports = conn;
