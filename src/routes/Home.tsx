import '../Global.css'
import './Home.css'
import { FaGithub } from 'react-icons/fa'
import { SiWindows11 } from 'react-icons/si'
import Screen_1 from '../assets/Screen 1.png'

function Home() {
  return (
    <main className="App-main">
      <section className="hero">
        <div className="hero-content">
          <h2 className="initial-question">
            Tired of the YouTube downloaders full of ads and with malicious
            content?
          </h2>
          <p className="initial-answer">
            Me too, because of this I've made this project with Python, Qt for
            Python (PySide 6.7) and PyTube-fix.
          </p>
          <p className="open-source-tag">
            Made by and for the community, open-source project.
          </p>
          <a
            target="_blank"
            href="https://github.com/ExoticGamerrrYT/youtube-video-downloader"
            className="button"
          >
            <FaGithub className="button-icon" /> Discover more
          </a>
        </div>
        <img
          src={Screen_1}
          alt="Software presentation"
          className="hero-image"
        />
      </section>
      <a
        target="_blank"
        href="https://github.com/ExoticGamerrrYT/youtube-video-downloader/releases"
        className="button button-large"
      >
        <SiWindows11 className="button-icon" />
        Download
      </a>
      <section className="features">
        <div className="feature">
          <h3>
            <span className="bold">Free</span> Video Downloader
          </h3>
          <p>Unlimited downloads for free.</p>
        </div>
        <div className="feature">
          <h3>Quality Selector</h3>
          <p>You can select the quality of the video.</p>
        </div>
        <div className="feature">
          <h3>Custom Download Path</h3>
          <p>You can select the download directory.</p>
        </div>
      </section>
    </main>
  )
}

export default Home
