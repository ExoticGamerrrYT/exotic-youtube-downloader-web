import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './routes/Home'
import Downloads from './routes/Downloads'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
