import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import StartPage from './pages/StartPage';
import ContactMe from './pages/ContactMe';
import { Details } from './pages/Details';
import SkillsPage from './pages/SkillsPage';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/skills" element={<SkillsPage />} />
        <Route path="/profile" element={<HomePage />} />
        <Route path="/details" element={<Details />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/" element={<StartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
