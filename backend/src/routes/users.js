const express = require('express');
const router = express.Router();

// Get all users (placeholder)
router.get('/', (req, res) => {
  res.json({ users: [] });
});

module.exports = router;
