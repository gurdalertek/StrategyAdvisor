// let ModelArrayServer;
var compression = require('compression');
const express = require('express');
// const mongoose = require("mongoose");
const path = require('path');
var cors = require('cors');
const app = express();
const { configureDatabase } = require('./middleware/db');

const { consumeData } = require('./libs/Utils');

const https = require('https');
// const fs = require("fs");

// Body-parser Middleware
app.use(compression(express.json()));
// require("dotenv").config({ path: __dirname + "/.env" });
app.use(cors());

// const whitelist = [
//   `${process.env.REACT_APP_SERVER_URL}`,
//   `${process.env.REACT_APP_CLIENT_URL}`,
// ];
// app.use(
//   cors({
//     origin: (origin, callback) => {
//       if (whitelist.indexOf(origin) !== -1 || !origin || "*") {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     credentials: false, // enable set cookie
//   })
// );

// DB Config
// Connect to MongoDB
let arrayModule;
const ModelArray = consumeData(configureDatabase);
console.log('Model Array: ');
console.log(ModelArray);
arrayModule = ModelArray;
/*
const myURI = "mongodb+srv://ahmet:T8Ud2ldLy2MfvwFE@strategyadvisorcloud.8pemb.mongodb.net/anket?retryWrites=true&w=majority"
mongoose.connect(myURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}, () => console.log('Connected to database')).then((db) => {
  db.connection.db.collection('anket').count(async (err, count) => {
    if (count === 0) {
      const ModelArray = await consumeData(configureDatabase)
      //console.log(ModelArray)
      arrayModule = ModelArray
      //module.exports = { ModelArray }
    }
  })
}).catch(err => console.log(`Error: ${err}`))
*/

app.get('/api/getModule', async (req, res) => {
  console.log(req.query.moduleId);
  var result = arrayModule.filter((obj) => {
    return obj.moduleNo == req.query.moduleId;
  });

  res.send(result);
});

// Use Routes
// app.use("/api/users", require("./routes/api/users"));
// app.use("/api/auth", require("./routes/api/auth"));
// app.use('/api/records', require('./routes/api/records'));
// app.use('/api/getModule', require('./routes/api/getmodel'));

app.enable('trust proxy');

app.use(function (request, response, next) {
  if (process.env.NODE_ENV != 'development' && !request.secure) {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });

    return response.redirect('https://' + request.headers.host + request.url);
  }

  next();
});

// Serve static assets if in production
// if (process.env.NODE_ENV == 'production') {
//   app.use(express.static('client/build'));

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }

// Port
// const port = process.env.PROD_SERVER_PORT || 3000;

// app.listen(port, () => console.log(`Server started on port ${port}`));

// app.listen(process.env.PROD_SERVER_PORT || 3000);

app.listen(process.env.PORT || 3000);
