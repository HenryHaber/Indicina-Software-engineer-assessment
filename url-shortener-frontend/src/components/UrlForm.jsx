import { useState } from 'react';
import axios from 'axios';

function UrlForm({ onShorten }) {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setShortUrl('');

    if (!longUrl.trim()) {
      setError('Please enter a URL.');
      return;
    }

    try {
      const res = await axios.post('http://localhost:3000/api/encode', { longUrl });
      setShortUrl(`http://localhost:3000/${res.shortPath}`);
      onShorten(); // Refresh list
      setLongUrl('');
    } catch (err) {
      setError('Failed to shorten URL.');
    }
  };

  return (
      <div className="bg-white p-4 rounded-xl shadow-md mb-6">
        <form onSubmit={handleSubmit} className="">
          <input
              type="url"
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
              placeholder="Enter a long URL..."
              className="border w-[50vw] border-gray-300 py-10 rounded-md focus:outline-none focus:ring-0 focus:ring-blue-500"
          />
          <button
              type="submit"
              className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Shorten URL
          </button>
        </form>
        {shortUrl && (
            <div className="mt-3 text-green-600">
              Short URL: <a href={shortUrl} className="underline">{shortUrl}</a>
            </div>
        )}
        {error && <div className="mt-3 text-red-600">{error}</div>}
      </div>
  );
}

export default UrlForm;
