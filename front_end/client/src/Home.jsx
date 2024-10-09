// HtmlPage.jsx
import React from 'react';

const Home = () => {
  return (
    <div>
      <iframe 
        src="/Front.html" 
        title="Home Page"
        style={{ width: '100%', height: '100vh', border: 'none' }}
      />
    </div>
  );
};

export default Home;
