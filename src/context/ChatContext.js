import { createContext, useReducer } from "react";
import { useSelector } from "react-redux";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const currentUser = useSelector((state) => state.user.currentUser);

  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };

  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId:
            currentUser.idst > action.payload.idst
              ? currentUser.idst + action.payload.idst
              : action.payload.idst + currentUser.idst,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
