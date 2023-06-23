export default function Clicker({ message, buttonText }) {
  function alertMsg() {
    alert(message);
  }

  return (
    <div>
      <button onClick={alertMsg}>{buttonText}</button>
    </div>
  );
}
