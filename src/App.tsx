import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Vulnerability from './pages/Vulnerability'
import PageNotFound from './pages/PageNotFound'
import Vulnerabilities from './pages/Vulnerabilities'

function App() {

  return (
    <>
    <div className='menu'>
      <h1>Dark Invader</h1>
    </div>
      <div className='main-content'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/vulnerabilities/:uuid' element={<Vulnerability/>} />
        <Route path='/vulnerabilities' element={<Vulnerabilities/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
      </div>
    </>
  )
}

export default App
