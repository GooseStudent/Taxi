import { Routes, Route } from 'react-router';
import Menu from './components/Menu.jsx';
import Home from './pages/Home.jsx';
import Drift from './pages/Drift.jsx';
import TimeAttack from './pages/TimeAttack.jsx';
import Forza from './pages/Forza.jsx';

function App() {
  return (
    <div className="app">
      <Menu />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drift" element={<Drift />} />
          <Route path="/timeattack" element={<TimeAttack />} />
          <Route path="/forza" element={<Forza />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;