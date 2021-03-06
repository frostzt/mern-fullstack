const express = require('express');
const morgan = require('morgan');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Initialize middlewares
app.use(morgan('dev'));
app.use(express.json({ limit: '10kb' }));

app.get('/', (req, res) => res.send('API running'));

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
