// src/server.js
const app = require('./app');   // Import the Express app
const PORT = process.env.PORT || 4000;

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 ISTOS-QMS backend running on port ${PORT}`);
});
