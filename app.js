const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();

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
