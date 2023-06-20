import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../../context/ChatContext";
import { db } from "../../utils/firebase";
import ChatMessage from "./ChatMessage";

const ChatMessages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  // console.log(messages);

  return (
    <div className="chatmessages">
      {messages.map((m) => (
        <ChatMessage message={m} key={m.id} />
      ))}
    </div>
  );
};

export default ChatMessages;
