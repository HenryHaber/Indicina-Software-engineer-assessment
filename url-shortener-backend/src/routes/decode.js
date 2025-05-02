import express from 'express';
import { decodeUrl } from "../services/urlService.js";

const router = express.Router();

router.post("/decode", (req, res) => {
    const { shortPath } = req.body;
    if (!shortPath) return res.status(400).json({ error: "shortPath is required" });

    const result = decodeUrl(shortPath);
    if (!result) return res.status(404).json({ error: "Short URL not found" });

    res.json({ longUrl: result.longUrl });
});

export default router;
