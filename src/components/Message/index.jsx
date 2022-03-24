import "./style.css";

function Message({ image, message }) {
  return (
    <div className="successContainer">
      <img src={image} alt="Success" />
      <h2>{message}</h2>
    </div>
  );
}
export default Message;
