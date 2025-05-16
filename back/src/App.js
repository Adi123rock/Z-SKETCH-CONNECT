import { useState } from "react";
import Navbar from './navbar.js';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path='/' element={}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
