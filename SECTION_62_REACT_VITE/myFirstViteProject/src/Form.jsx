function handleOnSubmit(event) {
  event.preventDefault();
  console.log("submitted the form!");
}

export default function Form() {
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <button> submit </button>
      </form>
    </div>
  );
}
