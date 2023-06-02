import React from 'react';
import Header from './COMPONANTE/Header';
import SearchPage from './COMPONANTE/SearchPage';
import Home from './COMPONANTE/Home';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search' element={<SearchPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
