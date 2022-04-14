const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const cors = require('cors');
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 8000;

// Connect to database
connectDB();

const app = express();

// send raw json
app.use(express.json());
// accept Urlencoded form
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.status(200).send({ message: 'Welcome to the Support Desk API' });
});

// Cors
app.use(cors());

//Routes
app.use('/api/users', require('./routes/userRoutes'));

// Pass in middleware
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
