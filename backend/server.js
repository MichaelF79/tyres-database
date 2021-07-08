import express from "express";
import cors from "cors";
import tyres from "./api/tyres.route.js"; // file routes declared are in

const app = express(); // used to make server

app.use(cors()); // middleware for express
app.use(express.json()); //don't need body-parser anymore, server can accept json in body of request(GET, POST)

app.use("/api/v1/tyres", tyres); // initial url, route
app.use("*", (req, res) => res.status(404).json({ error: "not found" }))
// * means wildcard , request - response if url is different
export default app // app exported as module