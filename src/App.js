import './App.css';


{/*uploadpage5.js */}

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
          <button className="tab active">Challenges</button>
          <button className="tab">Collections</button>
        </div>

        <div className="collections">
          <div className="collection">
            <img src={"yoga.jpg"} alt="Extreme Yoga Challenge" />
            <div className="collection-title">Extreme Yoga Challenge</div>
            <div className="collection-info">Raven | 2 years ago | 788 Views</div>
          </div>
          <div className="collection">
            <img src={"laugh.jpg"} alt="Try Not to Laugh Challenge" />
            <div className="collection-title">Try Not to Laugh Challenge</div>
            <div className="collection-info">Raven | 2 weeks ago | 22 Views</div>
          </div>
          <div className="collection">
            <img src={"workout.jpg"} alt="5 Hour Workout Challenge" />
            <div className="collection-title">5 Hour Workout Challenge</div>
            <div className="collection-info">Raven | 2 years ago | 590 Views</div>
          </div>
          <div className="collection">
            <img src={"fullbody.jpg"} alt="Full Body Workout" />
            <div className="collection-title">Best Full Body Workout to Lose Fat</div>
            <div className="collection-info">Raven | 2 months ago | 160 Views</div>
          </div>
        </div>
      </div>
    </div>
  );
}

{/* TESTING FOR GITHUB */}

export default App;