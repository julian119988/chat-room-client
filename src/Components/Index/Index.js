import { useEffect, useState } from "react";
import "./Index.scss";
export default function Index(props) {
  const [username, setUsername] = useState("");
  const [mostrarError, setMostrarError] = useState("none");
  const [mensajeError, setMensajeError] = useState("");

  function handleChange(e) {
    setUsername(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (username === "") {
      setMensajeError("Complete el campo para continuar");
    } else if (username.length > 10 || username.length < 2) {
      setMensajeError(
        "El nombre de usuario debe contener entre 2 y 10 caracteres"
      );
    } else if (
      username.includes("<") ||
      username.includes(">") ||
      username.includes("{") ||
      username.includes("}") ||
      username.includes("[") ||
      username.includes("]")
    ) {
      setMensajeError(
        "El nombre de usuario no debe contener carateres especiales"
      );
    } else {
      props.getUser(username);
    }
  }
  useEffect(() => {
    if (mensajeError) {
      setMostrarError("flex");
    }
  }, [mensajeError]);

  return (
    <div className="container">
      <div className="card">
        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "20vh",
              justifyContent: "center",
            }}
          >
            <label style={{ marginBottom: "4vh" }}>
              Ingrese su nombre de usuario:
            </label>
            <input type="text" onChange={handleChange} autoFocus />
            <br></br>
            <label
              style={{
                color: "gray",
                fontSize: "1vh",
                textAlign: "center",
                width: "17vh",
                marginTop: "1vh",
              }}
            >
              El nombre de usuario tienen que ser letras y una cantidad de 4 a
              8.
            </label>
          </div>

          <input type="submit" value="Enviar" />
        </form>
      </div>
      <div className="errorDiv" style={{ display: mostrarError }}>
        <label style={{ display: mostrarError }}>{mensajeError}</label>
        <button
          onClick={() => {
            setMostrarError("none");
            setMensajeError("");
          }}
        ></button>
      </div>
    </div>
  );
}
