import express from 'express';
import cors from 'cors';
const app = express();
const port = 9005;

// Enable CORS for frontend to make requests
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Example API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Node.js backend!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
