import './App.css';

function App() {
  return (
    <div className="upload-page">
      <header className="header">
        <div className="left-side">
          <div className="profile-pic">
            <img src={"profile-icon.svg"} alt="icon" />
          </div>
          <div className="camera-icon">
            <img src={"add-video.svg"} alt="add-video-icon" />
          </div>
        </div>
        <div className="search-bar">
        <div className="search-icon"><img src={"search-icon.svg"} alt="search-icon" /></div>
          <input className="search-box" type="text" placeholder="Search Challenge Collection" />
        </div>
        <div className="wallet-button">
          <button className="Connect-wallet">Connect Wallet</button>
        </div>
      </header>

      <div className="video-player-container">
        <div className="video-player">
          <img src={"random-video.jpg"} alt="Video" />
        </div>
        <div className="video-details">
          <h2 className="video-title">Awesome Workout Video</h2>
          <p className="video-description">Check out this amazing workout routine!</p>
          <div className="uploaded-by">Uploaded by Raven • 2 months ago</div>
          <div className="collection-info">Collection: Diet</div>
          <div className="actions">
            <button className="like-button">Like</button>
            <button className="approve-button">Approve</button>
          </div>
        </div>
      </div>

      <div className="comment-section">
        {/* Comment section */}
        <div className="comment">User123: Great video!</div>
        <div className="comment">User456: I love this workout!</div>
      </div>

      <footer className="footer">
        {/* Bottom bar */}
      </footer>
    </div>
  );
}

export default App;