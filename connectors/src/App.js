import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./style.css";
import NewConnector from './Components/NewConnector';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/newconnector" element={<NewConnector />} />
      </Routes>
    </Router>
  );
}

export default App;

// import React from 'react';

// const HomePage = () => {
//   return (
//     // <div>
//     //   <h1>Hi there!</h1>
//     // </div>
//   );
// };

// export default HomePage;