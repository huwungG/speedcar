import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import './css/global.css';

// src/App.jsx
export default function App() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: "2rem" }}>
      <h1>🚗 Speedcar</h1>
      <p>Welcome to your first React + Vite front end!</p>
      <button
        style={{
          padding: "0.5rem 1rem",
          borderRadius: "0.5rem",
          border: "none",
          background: "#2563eb",
          color: "white",
          cursor: "pointer",
        }}
        onClick={() => alert("Vroom vroom! 🏎️")}
      >
        Click Me
      </button>
    </div>
  );
}

