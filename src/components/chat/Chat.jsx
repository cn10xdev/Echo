import "./chat.css"
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";

const Chat = () => {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");

    const handleEmoji = e => {
        setText(prev => prev + e.emoji)
        setOpen(false);
    };

    return (
        <div className="chat">
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>Navya</span>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />
                </div>
            </div>
            <div className="center">
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi ipsum sint corporis, saepe consectetur optio ut illum explicabo rem inventore dolor atque aperiam numquam maiores!</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi ipsum sint corporis, saepe consectetur optio ut illum explicabo rem inventore dolor atque aperiam numquam maiores!</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi ipsum sint corporis, saepe consectetur optio ut illum explicabo rem inventore dolor atque aperiam numquam maiores!</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <img src="https://images.unsplash.com/photo-1719258907245-c2bd1a584aef?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi ipsum sint corporis, saepe consectetur optio ut illum explicabo rem inventore dolor atque aperiam numquam maiores!</p>
                        <span>1 min ago</span>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>
                <input type="text" placeholder="Type a message..." value={text} onChange={(e) => setText(e.target.value)}/>
                <div className="emoji">
                    <img src="./emoji.png" alt="" onClick={() => setOpen((prev) => !(prev))}/>
                    <EmojiPicker className="picker" open={open} onEmojiClick={handleEmoji}/>
                </div>
                <button className="sendButton">Send</button>
            </div>
        </div>
    )
}

export default Chat;