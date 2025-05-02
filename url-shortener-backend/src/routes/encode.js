import express from 'express';
import {encodeUrl} from "../services/urlService.js";

const router = express.Router();

router.post("/encode", (req, res) => {
    const { longUrl } = req.body;
    if (!longUrl) return res.status(400).json({ error: "longUrl is required" });

    const result = encodeUrl(longUrl);
    res.json(result);
});

export default router;