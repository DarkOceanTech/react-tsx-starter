import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './views/Navigation';
import Home from './views/Home';
import Footer from './views/Footer';
import Community from './views/Community';

const App = (): JSX.Element => {
  return <div>
          <Router>
            <Navigation/>
              <Routes>
                <Route path="/" element={<Home/> }/>
                <Route path="/community" element={<Community/> }/>
              </Routes>
            <Footer/>
          </Router>
        </div>
}

export default App;
