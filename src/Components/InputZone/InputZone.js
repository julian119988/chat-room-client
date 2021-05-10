import "./InputZone.scss";
import { useRef, useState } from "react";

export default function InputZone(props) {
  const [mensaje, setMensaje] = useState("");
  const submitRef = useRef();
  const inputRef = useRef();

  function enviarMensaje(event) {
    event.preventDefault();
    if (mensaje === "") return;
    props.socket.emit("nuevoMensaje", {
      mensaje,
      usuario: props.user.username,
      user_id: props.socket?.id,
      timeStamp: Date.now(),
    });
    props.nuevoMensaje({
      mensaje,
      usuario: props.user.username,
      user_id: props.socket?.id,
      timeStamp: Date.now(),
    });
    inputRef.current.value = "";
    setMensaje("");
  }
  function handleChange(event) {
    setMensaje(event.target.value);
  }

  return (
    <div className="inputZone">
      <form onSubmit={enviarMensaje}>
        <input
          id="usermsg"
          name="usermsg"
          type="text"
          onChange={handleChange}
          autoFocus={true}
          ref={inputRef}
          autoComplete="off"
        />
        <input type="submit" value="Send" ref={submitRef} />
      </form>
    </div>
  );
}
