import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContexProvider } from "./context/authContext";
import { ChatContextProvider } from "./context/ChatContext";

import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AuthContexProvider>
        <ChatContextProvider>
          <App />
        </ChatContextProvider>
      </AuthContexProvider>
    </PersistGate>
  </Provider>
);
