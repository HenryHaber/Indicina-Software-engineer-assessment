import  React,{ useState } from 'react';
import StatsModal from './StatsModal';

function UrlList({ urls }) {
  const [copiedUrl, setCopiedUrl] = useState(null);
  const [showStats, setShowStats] = useState(null);

  const handleCopy = async (shortUrl) => {
    await navigator.clipboard.writeText(shortUrl);
    setCopiedUrl(shortUrl);
    setTimeout(() => setCopiedUrl(null), 1500);
  };

  return (
      <div className="bg-white p-4 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">📄 Shortened URLs</h2>
        <ul className="space-y-4">
          {urls.map(({ shortUrl, longUrl, visitCount, shortPath, createdAt }) => {
            return (
                <li key={shortUrl} className="border-b pb-4">
                  <p><strong>Original:</strong> {longUrl}</p>
                  <p><strong>Short:</strong> <a href={shortUrl} className="text-blue-600 underline">{shortUrl}</a></p>
                  <p><strong>Visits:</strong> {visitCount}</p>
                  <div className="mt-2 flex gap-2">
                    <button onClick={() => handleCopy(shortUrl)} className="text-sm bg-gray-800 text-white px-3 py-1 rounded">
                      {copiedUrl === shortUrl ? 'Copied!' : 'Copy'}
                    </button>
                    <button onClick={() => setShowStats({ shortPath, shortUrl })} className="text-sm bg-indigo-600 text-white px-3 py-1 rounded">
                      View Stats
                    </button>
                  </div>
                </li>
            );
          })}
        </ul>

        {showStats && (
            <StatsModal
                shortPath={showStats.shortPath}
                shortUrl={showStats.shortUrl}
                onClose={() => setShowStats(null)}
            />
        )}
      </div>
  );
}

export default UrlList;