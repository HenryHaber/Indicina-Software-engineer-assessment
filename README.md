
# 🔗 URL Shortener

A full-stack modern URL shortener built with **Node.js**, **Express**, and a **React** frontend — designed to generate short links, track visit statistics, and provide insights in a user-friendly interface.

---

## 🚀 Features

- ✨ Shorten long URLs instantly
- 📊 View total visit counts and creation timestamps
- 🔗 Copy short URLs with one click
- 🧠 View real-time statistics in a modal
- 🎨 Clean, responsive UI with Tailwind CSS

---

## 🧱 Tech Stack

| Layer      | Tech                          |
|------------|-------------------------------|
| Backend    | Node.js, Express, nanoid      |
| Frontend   | React, Axios, Tailwind CSS    |
| Database   | MongoDB (via Mongoose)        |
| Dev Tools  | Nodemon, concurrently, Vite    |

---

## 📂 Project Structure

```
url-shortener/
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── models/
│   │   └── app.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
```

---

## ⚙️ Getting Started

### 🛠 Backend Setup

1. **Install dependencies**
   ```bash
   cd backend
   npm install
   ```

2. **Configure `.env`**
   ```bash
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/url-shortener
   ```

3. **Run server**
   ```bash
   npm run dev
   ```

---

### 🎨 Frontend Setup

1. **Install dependencies**
   ```bash
   cd frontend
   npm install
   ```

2. **Run React app**
   ```bash
   npm run dev
   ```

3. Visit the app at: [http://localhost:5173](http://localhost:5173)

---

## 📡 API Endpoints

| Method | Endpoint                    | Description                    |
|--------|-----------------------------|--------------------------------|
| POST   | `/api/encode`              | Shortens a long URL           |
| GET    | `/api/decode/:shortPath`   | Redirects to original URL     |
| GET    | `/api/statistic/:shortPath`| Returns visit stats            |

---

## 🔐 Example Response

**POST `/api/encode`**

Request:
```json
{ "longUrl": "https://themeatmill.com" }
```

Response:
```json
{ "shortPath": "abc123" }
```

---

## 🧪 Future Improvements

- ✅ Expiration logic for links
- ✅ Auth-protected URL dashboards
- ✅ QR code generation
- ✅ Public click analytics

---

## 📜 License

MIT – Free to use, modify, and share.
