const express = require('express');
const router = express.Router();

// Example GET route
router.get('/', (req, res) => {
  res.json({ equipment: [] }); // placeholder response
});

module.exports = router;
