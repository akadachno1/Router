import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import LoginButton from './components/LoginButton';

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav style={{ backgroundColor: '#f8f9fa', padding: '1rem' }}>
          <ul style={{ listStyleType: 'none', display: 'flex', gap: '1rem' }}>
            <li><Link to="/">หน้าหลัก</Link></li>
            <li><Link to="/about">เกี่ยวกับเรา</Link></li>
            <li><Link to="/news">ข่าวสาร</Link></li>
            <li><Link to="/courses">หลักสูตร</Link></li>
            <li><Link to="/products">สินค้า</Link></li>
            <li><Link to="/downloads">ดาวน์โหลดเอกสาร</Link></li>
            <li><Link to="/contact">ติดต่อเรา</Link></li>
            <li style={{ marginLeft: 'auto' }}><LoginButton /></li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
