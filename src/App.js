import React from 'react';
import './App.css';
import Header from './components/Header/index';
import Moments from './components/Moments';

export default function App() {
  return (
    <div className="app">
      <Header />
      <Moments />
    </div>
  );
}
