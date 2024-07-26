import './uploadpage3.css';


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

      <div className="main-upload">
        <h2 className="heading2">Upload a Video</h2>


        {/*Video details*/}

        <div className="columns">
          <div className="column1">
            <div className="details-section">
              <h3>Details</h3>
              <div className="form-group">
              <div className="titlearea">
                  <label htmlFor="title">Title (required field)</label>
                  <input type="text" id="title" placeholder="Add video title here" />
              </div> 
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <div className="descriptionbox">
                  <textarea id="description" placeholder="Tell something about your video"></textarea>
                </div>
              </div>
              <div className="form-group">
              <div className="selectbox">
                  <label htmlFor="collection">Collection</label>
                  <select id="collection">
                    <option value="">Select</option>
                    <option value="">Diet</option>
                    <option value="">Workout</option>
                    <option value="">Food</option>
                    {/* Add more options here */}
                  </select>
              </div> 
              </div>
              <div className="form-group">
                <div className="tagssection">
                <label htmlFor="tags">Tags</label>
                <input type="text" id="tags" placeholder="Enter a comma after each tag" />
              </div>
              </div>
              <button className="save-button">SAVE</button>
            </div>
          </div>

          {/* EDIT ONLY THIS PART */}
          <div className="column2">
            <h3>Preview</h3>
            <div className="preview-box">
              <img src={"background.jpg"} alt="Video preview" />
            </div>
          </div>
        </div>
      </div>


      {/*Here is the previous */}
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
          <a href="/" style={{ textDecoration: 'none' }} className="view-all">View All</a>
        </div>
      </footer>
    </div>
  );
}

export default App;