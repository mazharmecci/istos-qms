const express = require('express');
const router = express.Router();

// Placeholder GET route for all equipment
router.get('/', (req, res) => {
  res.json({ equipment: [] });
});

module.exports = router;
