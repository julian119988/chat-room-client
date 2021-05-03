import { useEffect, useState } from "react";
import "./TextZone.scss";
export const TextZone = (props) => {
  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    props.socket?.on("nuevoMensaje", (msg) => {
      setMensajes((mensajes) => [...mensajes, msg]);
      document.getElementsByClassName(
        "textZone"
      )[0].scrollTop = document.getElementsByClassName(
        "textZone"
      )[0].scrollHeight;
    });
  }, [props.socket]);
  useEffect(() => {
    if (props.nuevoMensaje) {
      setMensajes((mensajes) => [...mensajes, props.nuevoMensaje]);
    }
  }, [props.nuevoMensaje]);

  return (
    <div className="textZone">
      <ul id="lista">
        {mensajes.map((mensaje) => {
          const time = new Date(mensaje.timeStamp);
          const msgTime = time.getHours() + ":" + time.getMinutes();
          return (
            <li>
              <div className="mensaje">
                <p className="mensajePrincipal">{mensaje.mensaje}</p>
                <p className="timestamp">{mensaje.usuario + " " + msgTime}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
