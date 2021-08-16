import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import Main from "./Components/Main/Main";
import Index from "./Components/Index/Index";
import "./App.scss";

const SERVER = "https://chat-room-app-weld.vercel.app/";

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

    useEffect(() => {
        if (user) {
            socket.emit("usuarioEstablecido", {
                usuario: user.username,
                user_id: socket.id,
            });
        } // eslint-disable-next-line
    }, [user]); // eslint-disable-next-line

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
