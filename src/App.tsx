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
import ProjectDetails from './pages/ProjectDetails'
export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0f12] text-white">
      <Routes>
        
        <Route path="/" element={<Login />} />

        
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
        <Route
          path="/projects/:id"
            element={
            <>
            <Header />
              <main className="pt-20"><ProjectDetails /></main>
            <Footer />
    </>
  }
/>
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

       
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </div>
  )
}
