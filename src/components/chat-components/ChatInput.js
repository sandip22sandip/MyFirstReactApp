import React from "react";
import Img from "../../assets/images/chat-imgs/img.png";
import Attach from "../../assets/images/chat-imgs/attach.png";

const ChatInput = () => {
  return (
    <div className="chat">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" style={{ display: "none" }} id="file" name="" />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default ChatInput;
