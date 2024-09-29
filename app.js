const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();
const mongoose = require('mongoose');

const uri = 'mongodb+srv://jguruprasath444:1234@cluster0.ctuyv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'


async function database() {
  try {
    // Attempt to connect to MongoDB Atlas
    await mongoose.connect(uri);
    console.log('Connected to MongoDB Atlas!');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
  }
}

// Call the function to connect
database();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

//schemes from data.js
const healthSchemes = require('./data')
app.get('/', (req, res) => {
  res.render('match', { schemes: [] });
});

app.post('/match', (req, res) => {
  const { age, conditions } = req.body;
  const matchedSchemes = healthSchemes.filter(scheme => {
    if (age >= scheme.minAge && age <= (scheme.maxAge || Number.MAX_SAFE_INTEGER)) {
      return healthSchemes.every(condition => scheme.conditions.includes(conditions));
    }
    return false;
  });
  res.render('search', { schemes: matchedSchemes });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
