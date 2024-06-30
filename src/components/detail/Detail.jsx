import "./detail.css"

const Detail = () => {
    return (
        <div className="detail">
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h2>Navya</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="info">
                <div className="options">
                    <div className="title">
                        <span>Settings</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="options">
                    <div className="title">
                        <span>Privacy and help</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="options">
                    <div className="title">
                        <span>Shared Photos</span>
                        <img src="./arrowDown.png" alt="" />
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="" alt="" />
                                <span>photo.jpg</span>
                            </div>
                            <img src="./download.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="options">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <button>Block User</button>
            </div>
        </div>
    )
}

export default Detail;