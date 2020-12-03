const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

//Enviromental 
dotenv.config();
    
//Connect to DB
mongoose.connect(process.env.DB_CONNECT,{ useNewUrlParser: true },()=>{console.log('connected to database')});

//Import Routes
// const designerAccountRoute = require('./routes/designeraccount');
// const designerApiRoute = require('./routes/designerapi')
// const apiRoute = require('./routes/api');
//Route Middleware
// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cors());
// app.use('/designer/account',designerAccountRoute);
// app.use('/designer/api', designerApiRoute);
// app.use('/api',apiRoute);
// require('greenlock-express')
//     .init({
//         packageRoot: __dirname,

//         // contact for security and critical bug notices
//         maintainerEmail: "keonyanann@gmail.com",

//         // where to look for configuration
//         configDir: './greenlock.d',

//         // whether or not to run at cloudscale
//         cluster: false
//     })
//     // Serves on 80 and 443
//     // Get's SSL certificates magically!
//     .serve(app);n
app.listen(3001,()=>{
    console.log("Listening at port 3001");
})