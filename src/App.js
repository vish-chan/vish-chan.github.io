import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/Navigation';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';

function Banner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="top-banner">
      <div className="container banner-inner">
        <span>🚀 <strong>AlgoFlow</strong> — Visualize Java algorithms step by step, zero instrumentation.{' '}
          <a href="https://www.algopad.dev/" target="_blank" rel="noopener noreferrer">Try it live →</a>
        </span>
        <button className="banner-close" onClick={() => setVisible(false)}>✕</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Banner />
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Portfolio} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </div>
  );
}

export default App;
