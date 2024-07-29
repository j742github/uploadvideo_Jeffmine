import './App.css';


{/*uploadpage5.js nihao123*/}

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

{/*video containers*/}
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
            <img src={"workout.jpg"} alt="5 Hour Workout Challenge" />
            <div className="collection-title">5 Hour Workout Challenge</div>
            <div className="collection-info">Raven | 2 years ago | 590 Views</div>
          </div>
          <div className="collection">
            <img src={"workout.jpg"} alt="5 Hour Workout Challenge" />
            <div className="collection-title">5 Hour Workout Challenge</div>
            <div className="collection-info">Raven | 2 years ago | 590 Views</div>
          </div>
          <div className="collection">
            <img src={"workout.jpg"} alt="5 Hour Workout Challenge" />
            <div className="collection-title">5 Hour Workout Challenge</div>
            <div className="collection-info">Raven | 2 years ago | 590 Views</div>
          </div>
          <div className="collection">
            <img src={"workout.jpg"} alt="5 Hour Workout Challenge" />
            <div className="collection-title">5 Hour Workout Challenge</div>
            <div className="collection-info">Raven | 2 years ago | 590 Views</div>
          </div>
          <div className="collection">
            <img src={"workout.jpg"} alt="5 Hour Workout Challenge" />
            <div className="collection-title">5 Hour Workout Challenge</div>
            <div className="collection-info">Raven | 2 years ago | 590 Views</div>
          </div>
          <div className="collection">
            <img src={"workout.jpg"} alt="5 Hour Workout Challenge" />
            <div className="collection-title">5 Hour Workout Challenge</div>
            <div className="collection-info">Raven | 2 years ago | 590 Views</div>
          </div>
          <div className="collection">
            <img src={"workout.jpg"} alt="5 Hour Workout Challenge" />
            <div className="collection-title">5 Hour Workout Challenge</div>
            <div className="collection-info">Raven | 2 years ago | 590 Views</div>
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
{/*end of video containers */}


{/* bottom bar */}
      <footer className="footer">
        <div><b>Top Witnesses</b></div>
        <div className="witlist">
        <div className="witness-item">1 <div className="profile-pic1"> <img src={"profile-icon.svg"} alt="icon" /> </div>Raven</div>
          <div className="witness-item">2 <div className="profile-pic1"> <img src={"profile-icon.svg"} alt="icon" /> </div>Tom</div>
          <div className="witness-item">3 <div className="profile-pic1"> <img src={"profile-icon.svg"} alt="icon" /> </div>Jack</div>
          <div className="witness-item">4 <div className="profile-pic1"> <img src={"profile-icon.svg"} alt="icon" /> </div>Jason</div>
          <div className="witness-item">5 <div className="profile-pic1"> <img src={"profile-icon.svg"} alt="icon" /> </div>Naomi</div>
        </div>
        <div>
                    <a href="/" style={{textDecoration: 'none'}} className="view-all">View All</a>
        </div>
      </footer>
{/* end of bottom bar */}


{/* bottom bar */}
<footer className="footer">
        <div><b>Top Witnesses</b></div>
        <div className="witlist">
        <div className="witness-item">1 <div className="profile-pic1"> <img src={"profile-icon.svg"} alt="icon" /> </div>Olivia</div>
          <div className="witness-item">2 <div className="profile-pic1"> <img src={"profile-icon.svg"} alt="icon" /> </div>Mia</div>
          <div className="witness-item">3 <div className="profile-pic1"> <img src={"profile-icon.svg"} alt="icon" /> </div>Sophia</div>
          <div className="witness-item">4 <div className="profile-pic1"> <img src={"profile-icon.svg"} alt="icon" /> </div>David</div>
          <div className="witness-item">5 <div className="profile-pic1"> <img src={"profile-icon.svg"} alt="icon" /> </div>Luca</div>
        </div>
        <div>
                    <a href="/" style={{textDecoration: 'none'}} className="view-all">View All</a>
        </div>
      </footer>
{/* end of bottom bar */}








    </div>
   
  );
}

{/* TESTING FOR GITHUB */}

export default App;