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

{/* ----------------------- */}


      <div className="main-content">
        <div className="profile-section">
          <div className="profile-info">
            <div className="profile-pic-large">
              <img src={"profile-icon.svg"} alt="profile" />
            </div>
            <div className="profile-details">
              <div className="profile-name">Raven</div>
              <button className="edit-profile">Edit Profile</button>
            </div>
          </div>
        </div>

        <div className="tabs">
          <button className="tab">Challenges</button>
          <button className="tab active">Collections</button>
        </div>

        <div className="collections">
          <div className="collection new-collection">
            <div className="new-collection-icon">+</div>
            <div className="collection-title">New Collection</div>
          </div>
          <div className="collection">
            <img src={"diet.jpg"} alt="Diet" />
            <div className="collection-title">Diet</div>
          </div>
          <div className="collection">
            <img src={"workout.jpg"} alt="Workout" />
            <div className="collection-title">Workout</div>
          </div>
        </div>
      </div>
    </div>
  );
}

{/* TESTING FOR GITHUB */}

export default App;