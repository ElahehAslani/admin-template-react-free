import React, { ReactElement } from 'react';
import Login from './components/login'
import './App.css';


const App: React.FC = (): ReactElement => {
  return (
    <>
    <div className="App">
      <p>hello</p>
      <Login/>
    </div>
    </>
  );
}

export default App;
