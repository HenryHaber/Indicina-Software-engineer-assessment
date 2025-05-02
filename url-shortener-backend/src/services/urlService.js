import { nanoid } from 'nanoid';

const BASE_URL = "http://localhost:3000";

const urlDatabase = new Map();

function encodeUrl(longUrl) {
    const shortPath = nanoid(6);
    const shortUrl = `${BASE_URL}/${shortPath}`;
    const now = new Date().toISOString();

    urlDatabase.set(shortPath, {
        longUrl,
        shortPath,
        shortUrl,
        createdAt: now,
        visitCount: 0,
    });

    return { shortPath, shortUrl };
}

function decodeUrl(shortPath) {
    return urlDatabase.get(shortPath);
}

function incrementVisit(shortPath) {
    const entry = urlDatabase.get(shortPath);
    if (entry) {
        entry.visitCount += 1;
    }
}

function listUrls() {
    return Array.from(urlDatabase.values());
}

function getStats(shortPath) {
    return urlDatabase.get(shortPath);
}

export  {
    encodeUrl,
    decodeUrl,
    incrementVisit,
    listUrls,
    getStats,
};
