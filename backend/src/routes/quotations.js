const express = require('express');
const router = express.Router();

// Get all quotations (placeholder)
router.get('/', (req, res) => {
  res.json({ quotations: [] });
});

module.exports = router;
