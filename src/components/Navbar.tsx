import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'

import '../Global.css'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">Exotic YouTube Video Downloader</div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/downloads" className="navbar-link">
          Downloads
        </Link>
        <a href="your-repo-url" className="navbar-link">
          <FaGithub size={24} />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
