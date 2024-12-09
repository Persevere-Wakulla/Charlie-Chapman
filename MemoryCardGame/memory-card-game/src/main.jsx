import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './boilerPlate/App.jsx';
import './boilerPlate/index.css';
import PackingList from './conditional rendering/components/PackList.jsx';
import MemoryCard from './MemoryCardGame/MemoryCard.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <MemoryCard/>
  </React.StrictMode>
);
