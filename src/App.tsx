import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import MainPage from './pages/MainPage'
import AboutPage from './pages/AboutPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
              <Route index element={<MainPage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='*' element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
