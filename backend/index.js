import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv"; // to access environment variables
import TyresDAO from "./dao/tyresDAO.js";

// connect to database and start web server...

dotenv.config() // load in environment variables
const MongoClient = mongodb.MongoClient; // provides access to mongo client...

const port = process.env.PORT || 8000; // access environment variable at 5000, if not port 8000

MongoClient.connect (       // connect to database
  process.env.TYRES_DB_URI, // pass in env variable to access database
  {
    poolSize: 50,             // options: only 50 connections at a time
    wtimeout: 2500,           // request times out after 2500 milliseconds
    useNewUrlParser: true,    // new mongodb nodejs driver
    useUnifiedTopology: true
  }
)
.catch(err => {
  console.error(err.stack)    // check for errors
  process.exit(1)
})
.then(async client => {               // function: asynchronous client (user interface)
  await TyresDAO.injectDB(client)     // how we get initial reference to tyres collection in db
  app.listen(port, () => {            // start webserver, listen at port 5000
    console.log(`listening on port ${port}`)
  })
})