import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Data storage (file-based)
const DATA_FILE = path.join(__dirname, 'data.json');

const getStorageData = () => {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, 'utf-8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error reading storage file:', error);
  }
  return { visitors: 0, visitorSessions: [] };
};

const saveStorageData = (data) => {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error writing storage file:', error);
  }
};

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Get visitor count
app.get('/api/visitors', (req, res) => {
  const data = getStorageData();
  res.json({ count: data.visitors || 0 });
});

// Track visitor (increment count)
app.post('/api/visitors', (req, res) => {
  try {
    const data = getStorageData();
    const sessionId = req.body.sessionId || `session-${Date.now()}-${Math.random()}`;

    // Ensure arrays exist
    if (!data.visitorSessions) {
      data.visitorSessions = [];
    }

    // Only increment if this session hasn't been counted
    if (!data.visitorSessions.includes(sessionId)) {
      data.visitors = (data.visitors || 0) + 1;
      data.visitorSessions.push(sessionId);
      saveStorageData(data);
    }

    res.json({ count: data.visitors, sessionId });
  } catch (error) {
    console.error('Error tracking visitor:', error);
    res.status(500).json({ error: 'Failed to track visitor' });
  }
});

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
  console.log('  GET  /api/health');
  console.log('  GET  /api/visitors');
  console.log('  POST /api/visitors');
});
