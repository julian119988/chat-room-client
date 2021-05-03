import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import Main from "./Components/Main/Main";
import Index from "./Components/Index/Index";
import "./App.scss";

const SERVER = "http://127.0.0.1:8080";

function App() {
  const [user, setUser] = useState();
  const [socket, setSocket] = useState();

  useEffect(() => {
    const io = socketIOClient(SERVER);
    setSocket(io);
  }, []);
  function getUser(username) {
    setUser({
      username: username,
    });
  }

  return (
    <>
      {user ? (
        <Main socket={socket} user={user} />
      ) : (
        <Index getUser={getUser} />
      )}
    </>
  );
}

export default App;
