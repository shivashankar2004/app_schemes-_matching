require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/userModel.js');
const cors = require('cors');
const bcrypt = require('bcrypt');

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

async function database() {
  try {
    // connect to MongoDB Atlas
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Connected to MongoDB Atlas!');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
  }
}

database();

app.post('/register', async (req, res) => {
  try {
      const { name, password, details } = req.body;
      const existingUser = await User.findOne({ name });
      if (existingUser) {
          return res.status(400).json({ error: "The User Name is Taken" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({ name, password: hashedPassword, details });

      console.log(newUser);
      
      res.status(201).json(newUser);
      
  } catch (err) {
      console.error("Error handling /register route:", err);
      res.status(500).json({ error: err.message });
  }
});

app.post('/login', async (req, res) => {
  try {
      const { name, password } = req.body;

      const member = await User.findOne({ name });

      if (!member) {
          return res.status(404).json({ message: "No User Named " + name });
      }

      const isMatch = await bcrypt.compare(password, member.password);
      if (!isMatch) {
          return res.status(400).json({ message: "Invalid Password" });
      }
      return res.status(200).json({
          status : true
      });


  } catch (error) {
      console.error("Error handling /login route:", error);
      res.status(500).json({ error: error.message });
  }
});

app.put('/book', async (req, res) => {
  try {
    const { name, details } = req.body;

    if (!name || !details) {
      return res.status(400).json({ error: 'Please provide name and details object.' });
    }
    console.log(name);
    const user = await User.findOne({ name });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update specific fields within details (optional)
    if (details.income !== undefined) {
      user.details.income = details.income;
    }
    if (details.community !== undefined) {
      user.details.community = details.community.trim(); // Trim community field
    }
    if (details.age !== undefined) {
      user.details.age = Math.max(0, details.age); // Ensure age is non-negative
    }
    if (details.healthCondition !== undefined) {
      user.details.healthCondition = details.healthCondition.trim(); // Trim health condition field
    }

    // Alternatively, update the entire details object (less control)
    // user.details = details; // Update all details fields

    await user.save();

    return res.status(200).json({ message: 'Patient details updated successfully' });
  } catch (err) {
    console.error("Error handling /book route:", err);
    return res.status(500).json({ error: err.message });
  }
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


