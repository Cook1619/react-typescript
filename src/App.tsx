import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Head } from './components/Head';

const App: React.FC = () => {
  return (
    <div className="App">
      <Head title="Hello" isActive={true} />
    </div>
  );
};

export default App;
