// src/App.tsx
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Login from './pages/login'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0f12] text-white">
      <Routes>
        {/* Login route */}
        <Route path="/" element={<Login />} />

        {/* All main pages wrapped with Header + Footer */}
        <Route path="/home" element={
          <>
            <Header />
            <main className="pt-20"><Home /></main>
            <Footer />
          </>
        } />
        <Route path="/about" element={
          <>
            <Header />
            <main className="pt-20"><About /></main>
            <Footer />
          </>
        } />
        <Route path="/projects" element={
          <>
            <Header />
            <main className="pt-20"><Projects /></main>
            <Footer />
          </>
        } />
        <Route path="/skills" element={
          <>
            <Header />
            <main className="pt-20"><Skills /></main>
            <Footer />
          </>
        } />
        <Route path="/contact" element={
          <>
            <Header />
            <main className="pt-20"><Contact /></main>
            <Footer />
          </>
        } />
        <Route path="/resume" element={
          <>
            <Header />
            <main className="pt-20"><Resume /></main>
            <Footer />
          </>
        } />

        {/* Redirect all unknown routes to /login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </div>
  )
}
