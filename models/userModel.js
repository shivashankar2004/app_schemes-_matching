const mongoose = require('mongoose');
const { Schema }=mongoose
// Define the schema
const patientSchema = new Schema({
  income: {
    type: Number,
    default: 0        // Makes sure the income field is mandatory
  },
  community: {
    type: String,       // Makes sure the community field is mandatory
    trim: true,
    default: ''             // Removes any leading/trailing spaces
  },
  age: {
    type: Number,       // Makes sure the age field is mandatory
    min: 0   , 
    default: 0             // Age can't be negative
  },
  healthCondition: {
    type: String,      // Makes sure the health condition field is mandatory
    trim: true,
    default: ''             // Removes any leading/trailing spaces
  }
});
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    details: {
        type: patientSchema,
        default: {}
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
