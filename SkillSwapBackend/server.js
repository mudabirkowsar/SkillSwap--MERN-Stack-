require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const dbConnect = require('./src/utils/dbConnect');

// Import Routes
const authRoutes = require('./src/routes/authRoutes');
const skillRoutes = require('./src/routes/skillRoutes');
const swapRoutes = require('./src/routes/swapRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

// --- Middleware ---
app.use(cors()); 
app.use(express.json());

// --- Database Connection ---
dbConnect();

// --- API Routes ---
app.use('/api/auth', authRoutes); 
app.use('/api/skills', skillRoutes); 
app.use('/api/swaps', swapRoutes); 

app.get('/', (req, res) => {
    res.send('Skill Swap Backend API is running.');
});

// --- Start Server ---
app.listen(PORT, () => {
    console.log(`✅ Server listening on port ${PORT}`);
    console.log(`🔗 http://localhost:${PORT}`);
});