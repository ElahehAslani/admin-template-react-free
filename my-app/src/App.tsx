import React, { ReactElement } from 'react';
import Login from './components/login/login';
import './tailwind.global.css';
import './App.css';


const App: React.FC = (): ReactElement => {
  return (
    <>
    <div className="App">
      <p>Test :)</p>
      <Login/>
    </div>
    </>
  );
}

export default App;
