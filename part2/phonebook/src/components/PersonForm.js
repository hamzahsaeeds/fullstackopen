function PersonForm(props) {
  const {
    newName,
    newNumber,
    handleNewNameChange,
    handleNewNumberChange,
    handleSubmit,
  } = props;

  return (
    <form>
      <div>
        name:{" "}
        <input
          value={newName}
          onChange={(event) => handleNewNameChange(event)}
        />
      </div>
      <div>
        number:{" "}
        <input
          value={newNumber}
          onChange={(event) => handleNewNumberChange(event)}
        />
      </div>
      <div>
        <button type="submit" onClick={(event) => handleSubmit(event)}>
          add
        </button>
      </div>
    </form>
  );
}

export default PersonForm;
