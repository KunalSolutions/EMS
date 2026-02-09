import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth.js';
import connectToDatabase from './db/db.js';

connectToDatabase();  // ✅ make sure this is called before starting server

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);

// Root endpoint
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
