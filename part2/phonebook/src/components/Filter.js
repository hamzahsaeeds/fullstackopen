const Filter = (props) => {
  const { handleSearchChange } = props;

  return (
    <div>
      filter shown with:{" "}
      <input onChange={(event) => handleSearchChange(event)} />
    </div>
  );
};

export default Filter;
