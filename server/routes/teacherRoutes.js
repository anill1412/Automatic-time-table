const express = require('express');
const router = express.Router();
const Teacher = require('../models/Teacher');

// Route to add a teacher
router.post('/add', async (req, res) => {
  try {
    const newTeacher = new Teacher(req.body);
    await newTeacher.save();
    res.status(201).json(newTeacher);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to get all teachers
router.get('/api', async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
