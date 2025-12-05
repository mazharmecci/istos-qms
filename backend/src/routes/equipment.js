const express = require('express');
const router = express.Router();

// Get all equipment (placeholder)
router.get('/', (req, res) => {
  res.json({ equipment: [] });
});

module.exports = router;
