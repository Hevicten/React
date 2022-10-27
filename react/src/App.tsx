import * as React from 'react';
import { Navbar } from './nav';
import { Content } from './content';
import './style.css';

export default function App() {
  return (
    <div className="wrapper">
      <div className="hero-bg"></div>
      <div className="clip-video"></div>
      <Navbar />
      <Content />
    </div>
  );
}
