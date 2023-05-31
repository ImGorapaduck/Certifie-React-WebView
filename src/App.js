// import logo from "./logo.svg";
import PayLoadCertificate_WB13_Screen from "./PayLoadCertificate_WB13_Screen";
import PayInputUserData_WB14_Screen from './PayInputUserData_WB14_Screen'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'

function App() {
  return (

    <Router>
      <div className="App">
        <Routes>
          <Route path="/" Component={PayLoadCertificate_WB13_Screen} />
          <Route path="/info" Component={PayInputUserData_WB14_Screen} />
        </Routes >
      </div>
    </Router>

  );
}

export default App;
