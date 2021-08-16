const express= require('express');
const app = express();
const connectDB = require('./config/connectDataBase');
const contactRoutes = require('./routes/contact')


connectDB();





app.use(express.json())
app.use('/api/contacts',contactRoutes)
const PORT = process.env.PORT || 7000;
app.listen(PORT,()=>{console.log(`server is running on port ${PORT}`)});
