const express = require('express');
const router = express.Router();

// Test route to verify server is running
router.get('/test', (req, res) => {
  res.json({ message: 'Auth route working' });
});

module.exports = router;
