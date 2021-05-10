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
  useEffect(() => {
    document.getElementsByClassName(
      "textZone"
    )[0].scrollTop = document.getElementsByClassName(
      "textZone"
    )[0].scrollHeight;
  }, [mensajes]);

  function alinearMensaje(user_idMensaje) {
    if (user_idMensaje === props.socket?.id) {
      return { marginLeft: "auto" };
    }
    return { marginRight: "auto" };
  }
  return (
    <div className="textZone">
      <ul id="lista">
        {mensajes.map((mensaje, counter) => {
          const time = new Date(mensaje.timeStamp);
          let horas = time.getHours();
          let minutos = time.getMinutes();
          if (parseInt(minutos) < 10) {
            minutos = "0" + minutos.toString();
          }
          if (parseInt(horas) < 10) {
            horas = "0" + horas.toString();
          }
          const msgTime = horas + ":" + minutos;

          return (
            <li key={counter}>
              <div className="mensaje" style={alinearMensaje(mensaje.user_id)}>
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
