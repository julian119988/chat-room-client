import "./Main.scss";
import { Title } from "../Title/Title";
import { TextZone } from "../TextZone/TextZone";
import InputZone from "../InputZone/InputZone";

export default (props) => {
  return (
    <div className="main">
      <Title />
      <TextZone socket={props.socket} />
      <InputZone socket={props.socket} user={props.user} />
    </div>
  );
};
