import { useEffect, useState } from 'react';
import axios from 'axios';

function StatsModal({ shortUrl, onClose, shortPath }) {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/statistic/${shortPath}`);
        setStats(res.data);
      } catch (err) {
        setStats({ error: 'Failed to load stats' });
      } finally {
        setLoading(false);
      }
    };

    if (shortUrl) fetchStats();
  }, [shortUrl]);

  return (
      <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg relative">
          <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
          >
            ✖
          </button>
          <h2 className="text-xl font-bold mb-4">📊 Stats for <code>{shortUrl}</code></h2>

          {loading ? (
              <p className="text-gray-500">Loading...</p>
          ) : stats?.error ? (
              <p className="text-red-600">{stats.error}</p>
          ) : (
                  <div className="space-y-2">
                    <p><strong>Original URL:</strong><br /> {stats.longUrl}</p>
                    <p><strong>Total Visits:</strong> {stats.visitCount}</p>
                    <p><strong>Created At:</strong> {new Date(stats.createdAt).toLocaleString()}</p>
                  </div>
              )}
        </div>
      </div>
  );
}

export default StatsModal;