import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import MainPage from './pages/MainPage'
import AboutPage from './pages/AboutPage'
import CareerPage from './pages/CareerPage'
import PortfolioPage from './pages/PortfolioPage'
import PlanPage from './pages/PlanPage'
import ContactPage from './pages/ContactPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
              <Route index element={<MainPage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/career' element={<CareerPage />} />
              <Route path='/portfolio' element={<PortfolioPage />} />
              <Route path='/plan' element={<PlanPage />} />
              <Route path='/contact' element={<ContactPage />} />
              <Route path='*' element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
