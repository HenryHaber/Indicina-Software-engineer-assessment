// const express = require("express");
import  cors from "cors";
import express from "express";


import encodeRoute from './routes/encode.js';
import decodeRoute from './routes/decode.js';
import { incrementVisit, decodeUrl, listUrls, getStats }  from "./services/urlService.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// API routes
app.use("/api", encodeRoute);
app.use("/api", decodeRoute);

app.get("/api/list", (req, res) => {
    res.json(listUrls());
});

app.get("/api/statistic/:shortPath", (req, res) => {
    const result = getStats(req.params.shortPath);
    if (!result) return res.status(404).json({ error: "Not found" });
    res.json(result);
});

// Redirect route
app.get("/:shortPath", (req, res) => {
    const data = decodeUrl(req.params.shortPath);
    if (!data) return res.status(404).send("URL not found");
    incrementVisit(req.params.shortPath);
    res.redirect(data.longUrl);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
