import '../Global.css'
import './Downloads.css'

function Downloads() {
  return (
    <main className="App-main">
      <h2 className="downloads-title">Downloads</h2>

      <section className="download-section">
        <h3 className="section-title">How to install?</h3>
        <p className="install-instructions">
          <strong>
            It is highly recommended to install FFmpeg manually before running
            the program.
          </strong>{' '}
          The program can install FFmpeg automatically, but during testing,
          there were a few occasions when it did not install properly.
        </p>

        <h4>1. Installing FFmpeg</h4>
        <pre className="code-block">
          <code>
            # Using Winget (recommended)
            <br />
            winget install "FFmpeg (Essentials Build)"
            <br />
            # Using Chocolatey
            <br />
            choco install ffmpeg
          </code>
        </pre>

        <h4>2. Downloading the program executable</h4>
        <ol>
          <li>
            Go to releases and download the <code>.zip</code>
          </li>
          <li>
            Extract and run <code>.exe</code>
          </li>
        </ol>

        <a
          href="https://github.com/ExoticGamerrrYT/youtube-video-downloader/releases"
          className="download-button"
        >
          Download Latest Version
        </a>
      </section>

      <section className="contribute-section">
        <h3>Contributing</h3>
        <blockquote>
          <p>
            Remember to contribute according to the{' '}
            <a href="LICENSE">license</a>.
          </p>
        </blockquote>

        <h4>Setting up the workspace</h4>
        <pre className="code-block">
          <code>
            # Clone the repo
            <br />
            git clone
            https://github.com/ExoticGamerrrYT/youtube-video-downloader.git
            <br />
            # Move to the repo dir
            <br />
            cd youtube-video-downloader
            <br />
            # Make virtual environment
            <br />
            virtualenv .venv
            <br />
            # Activating virtual environment (for Windows)
            <br />
            .venv/Scripts/activate.ps1
            <br />
            # Installing libraries
            <br />
            pip install -r requirements.txt
          </code>
        </pre>
        <p>
          virtualenv package web{' '}
          <a href="https://virtualenv.pypa.io/en/latest/">here</a>.
        </p>
        <p>
          Built using{' '}
          <a href="https://github.com/brentvollebregt/auto-py-to-exe">
            auto-py-to-exe
          </a>
          .
        </p>
      </section>

      <section className="license-section">
        <h3>License</h3>
        <p>
          This project is under{' '}
          <a
            target="_blank"
            href="https://github.com/ExoticGamerrrYT/youtube-video-downloader/blob/main/LICENSE"
          >
            GNU General Public License v3.0
          </a>
          .
        </p>
      </section>
    </main>
  )
}

export default Downloads
