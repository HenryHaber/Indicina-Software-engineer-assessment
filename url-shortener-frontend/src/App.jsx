import React , { useState, useEffect } from 'react';
import UrlForm from './components/UrlForm';
import UrlList from './components/UrlList';
import axios from 'axios';

function App() {
  const [urls, setUrls] = useState([]);

  const fetchUrls = async () => {
    const res = await axios.get('http://localhost:3000/api/list');
    setUrls(res.data);
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  return (
      <main id={'root'} className="relative bg-conic-300 w-full b text-gray-800 p-6">
        <div className="max-w-3xl flex flex-col items-center w-full justify-center  mx-auto">
          <h1 className="text-3xl font-bold text-center mb-6">🔗 URL Shortener</h1>
          <UrlForm onShorten={fetchUrls} />
          <UrlList urls={urls} />
        </div>
      </main>
  );
}

export default App;
