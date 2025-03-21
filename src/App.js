import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import LoginSignup from './LoginSignup/LoginSignup';
import ProfessionistiDashboard from './ProfessionistiDashboard/ProfessionistiDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <Routes>
        <Route path="/professionisti-dashboard" element={<ProfessionistiDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
