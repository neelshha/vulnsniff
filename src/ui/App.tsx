import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import Home from './pages/Home';
import Components from './pages/Components';
import Docs from './pages/Docs';

export default function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen flex flex-col bg-neutral-200 dark:bg-[#000000]">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/components" element={<Components />} />
              <Route path="/docs" element={<Docs />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}