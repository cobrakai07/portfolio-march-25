import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import StartPage from './pages/StartPage';
import ContactMe from './pages/ContactMe';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/profile" element={<HomePage />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/" element={<StartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
