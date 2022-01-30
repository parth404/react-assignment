import "./Modal.css";
import Card from "./Card";

const Modal = (props) => {
  return (
    <div>
      <div className="backdrop" />
      <Card className="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <h2>{props.message}</h2>
        </div>
      </Card>
    </div>
  );
};

export default Modal;
