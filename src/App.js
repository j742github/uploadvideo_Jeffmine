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
                    <div className="search-icon"><img src={"searchicon.png"} alt="search-icon" /></div>
                    <input className="search-box" type="text" placeholder="Search Challenge Collection" />
                </div>
                <div className="wallet-button">
                    <button className="Connect-wallet">Connect Wallet</button>
                </div>
            </header>
            <div className="video-player-container">
                <div className="video-player">
                    <img src={"background.jpg"} alt="Video" />
                </div>
                <div className="video-details">
                    <div className="collection-info">Collection : <b>Diet</b> </div>
                    <div className="uploaded-by"><img src={"profile-icon.svg"} alt="icon" /><div>Raven • 2 months ago</div></div>
                    <h2 className="video-title">Awesome Workout Video</h2>
                    <p className="video-description">Check out this amazing workout routine!</p>
                    
                    
                    <div className="actions">
                        <div className="like-button">
                        <img src={"like.png"} alt="icon" /><div>Like</div>
                        </div>
                        <div className="approve-button">
                        <img src={"approve.png"} alt="icon" /><div>Approve</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="comment-section">
                <div className="commentbox">
                    <div><img src={"profile-icon.svg"} alt="icon" /></div>
                    <div className="userandcomment">
                        <input className="commentsearch-box" type="text" placeholder="Add a Comment" />
                    </div>
                </div>
                <div className="commentbox">
                    <div><img src={"profile-icon.svg"} alt="icon" /></div>
                    <div className="userandcomment">
                    <div className="userandtime">
                            <div>Clarie Edwards   1 hour ago</div>
                        
                    </div>
                    <div>This is Amazing</div>
                    </div>  
                </div>
                <div className="commentbox">
                    <div><img src={"profile-icon.svg"} alt="icon" /></div>
                    <div className="userandcomment">
                        <div className="userandtime">
                            <div>Clarie Edwards   1 hour ago</div>

                        </div>
                        <div>This is Amazing</div>
                    </div>
                </div>
            </div>


        </div>

    );
}

export default App;
