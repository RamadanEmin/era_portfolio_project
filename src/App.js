import { Routes, Route } from 'react-router-dom';
import SoundBar from './components/SoundBar/SoundBar';
import Intro from './pages/Intro/Intro';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';

export default function App() {
  return (
    <>
      <SoundBar />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </>
  );
}
