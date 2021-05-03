import "./InputZone.scss";
import { useEffect, useRef, useState } from "react";

export default function InputZone(props) {
  const [mensaje, setMensaje] = useState([]);
  const submitRef = useRef();

  function enviarMensaje(event) {
    event.preventDefault();
    props.socket.emit("nuevoMensaje", {
      mensaje,
      usuario: props.user.username,
      timeStamp: Date.now(),
    });
  }
  function handleChange(event) {
    setMensaje(event.target.value);
  }

  function submitOnEnter(event) {
    if (event.which === 13 && !event.shiftKey) {
      event.target.value = "";
      submitRef.current.click();
    }
  }
  useEffect(() => {
    document
      .getElementById("usermsg")
      .addEventListener("keypress", submitOnEnter);
  }, []);

  return (
    <div className="inputZone">
      <form onSubmit={enviarMensaje}>
        <textarea
          id="usermsg"
          name="usermsg"
          onChange={handleChange}
          autoFocus={true}
        />
        <input type="submit" value="enviar" ref={submitRef} />
      </form>
    </div>
  );
}
