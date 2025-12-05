const express = require('express');
const router = express.Router();

// Placeholder GET route for all quotations
router.get('/', (req, res) => {
  res.json({ quotations: [] });
});

module.exports = router;
