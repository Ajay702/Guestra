const express = require('express');
const connectDB = require('./config/database');
const categoryRoutes = require('./routes/categoryRoutes');
const subCategoryRoutes = require('./routes/subCategoryRoutes');
const itemRoutes = require('./routes/itemRoutes');

const app = express();
connectDB();

app.use(express.json());

require('dotenv').config();

// Routes
app.use('/api', categoryRoutes);
app.use('/api', subCategoryRoutes);
app.use('/api', itemRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
