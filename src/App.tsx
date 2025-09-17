import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Middle from './second/Middle';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <Middle/>
    </div>
  );
}

export default App;
