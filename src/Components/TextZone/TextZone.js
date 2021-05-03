import { useEffect, useState } from "react";
import "./TextZone.scss";
export const TextZone = (props) => {
  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    props.socket?.on("nuevoMensaje", (msg) => {
      console.log(mensajes, msg);
      setMensajes((mensajes) => [...mensajes, msg]);
    });
  }, [props.socket]);

  return (
    <div className="textZone">
      <ul>
        {mensajes.map((mensaje) => {
          const time = new Date(mensaje.timeStamp);
          const msgTime = time.getHours() + ":" + time.getMinutes();
          return (
            <li>
              <div className="mensaje">
                <p>
                  {mensaje.mensaje}
                  <p className="timestamp">{mensaje.usuario + " " + msgTime}</p>
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
