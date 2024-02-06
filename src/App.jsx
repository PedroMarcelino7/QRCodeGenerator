import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { QRious } from 'react-qrious';

function App() {
  const [value, setValue] = useState('https://www.1stg.me');

  return (
    <div className='app'>
      <div className="container">
        <h1>QRCode Generator</h1>

        <form>
          <input type="text" onChange={(e) => setValue(e.target.value)} />
        </form>

        <div className="qrcode_box">
          <div className="output">
            <QRious value={value} size={200} />
          </div>
        </div>
      </div>
    </div>
  );
}

function renderApp() {
  const rootContainer = document.getElementById('qrious');
  if (!rootContainer) {
    console.error("Root container 'qrious' not found.");
    return;
  }

  const root = ReactDOM.createRoot(rootContainer);
  root.render(<App />);
}

document.addEventListener('DOMContentLoaded', renderApp);

export default App;