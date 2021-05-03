import { useState } from "react";
import "./Index.scss";
export default function Index(props) {
  const [username, setUsername] = useState("");

  function handleChange(e) {
    setUsername(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.getUser(username);
  }
  return (
    <div className="container">
      <div className="card">
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} />
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  );
}
