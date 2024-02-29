// Modules
const express = require('express');
const dotenv = require('dotenv');
const connectDatabase = require('./helpers/database/connectDatabase');
const routers = require('./routers');


// Environment
dotenv.config({path:"./config/env/config.env"});
connectDatabase();
const PORT = process.env.PORT;
const app = express();


// Routers Middleware
app.use('/api', routers);



// Run server
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT} as ${process.env.NODE_ENV}`);
});