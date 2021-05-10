import "./Main.scss";
import { Title } from "../Title/Title";
import { TextZone } from "../TextZone/TextZone";
import InputZone from "../InputZone/InputZone";
import { useState } from "react";

const Main = (props) => {
  const [mensaje, setMensaje] = useState("");
  function nuevoMensaje(valor) {
    setMensaje(valor);
  }

  return (
    <div className="main">
      <Title />
      <TextZone socket={props.socket} nuevoMensaje={mensaje} />
      <InputZone
        socket={props.socket}
        user={props.user}
        nuevoMensaje={nuevoMensaje}
      />
    </div>
  );
};
export default Main;
