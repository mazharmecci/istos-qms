const express = require('express');
const router = express.Router();

// Placeholder GET route for all hospitals
router.get('/', (req, res) => {
  res.json({ hospitals: [] });
});

module.exports = router;
