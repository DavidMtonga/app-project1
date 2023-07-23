const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/tonse-savings-cluster")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(() => {
    console.log("failed to connect");
  });

const SignUpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = new mongoose.model("Collection1", SignUpSchema);

module.exports = collection;
