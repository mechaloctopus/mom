import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import BiopsyMethodology from './pages/BiopsyMethodology.jsx'
import DoxycyclineAnomaly from './pages/DoxycyclineAnomaly.jsx'
import './index.css'

function Router() {
  const [path, setPath] = useState(window.location.hash);

  useEffect(() => {
    const onHash = () => setPath(window.location.hash);
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  if (path === '#/biopsy-methodology') {
    return <BiopsyMethodology />;
  }
  if (path === '#/doxycycline-anomaly') {
    return <DoxycyclineAnomaly />;
  }

  return <App />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
