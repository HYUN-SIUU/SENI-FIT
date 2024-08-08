import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Info from './pages/Info';
import Experience from './pages/Experience';
import Teacher from './pages/Teacher';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    function adjustLayout() {
      const windowWidth = window.innerWidth;

      document.querySelectorAll('.header-menu').forEach((element) => {
        element.style.width = `${windowWidth * 0.1}px`;
      });
    }

    adjustLayout(); // 초기 레이아웃 조정

    window.addEventListener('resize', adjustLayout); // 창 크기 변경 시 레이아웃 조정

    return () => {
      window.removeEventListener('resize', adjustLayout); // 컴포넌트 언마운트 시 이벤트 제거
    };
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/teacher" element={<Teacher />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
