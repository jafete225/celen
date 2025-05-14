import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ModernHeader from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Mission from './pages/Mission';
import Contact from './pages/Contact';
import { ThemeProvider } from './contexts/ThemeContext';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ModernHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mission" element={<Mission />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}


export default App;