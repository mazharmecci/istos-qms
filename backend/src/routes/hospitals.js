const express = require('express');
const router = express.Router();

// Get all hospitals (placeholder)
router.get('/', (req, res) => {
  res.json({ hospitals: [] });
});

module.exports = router;
