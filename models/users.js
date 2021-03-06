const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create a schema
const userSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  phone: { type: Number, required: true, unique: true },
  password: { type: String },
  name: { type: String, required: true },
  dob: { type: Date },
  image: { type: String, required: true },
  isActive: { type: Boolean, required: true },
  lastLoginAt: { type: Date },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true }
});

/* INDEXES (used to speed up queries)
 * db.users.createIndex({ isActive: 1, _id: 1 })
 */

//Create a model using the schema
const User = mongoose.model('users', userSchema);

module.exports = User;
