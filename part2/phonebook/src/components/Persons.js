import Person from "./Person";

function Persons(props) {
  const { persons } = props;

  return persons.map((person) => <Person key={person.id} person={person} />);
}

export default Persons;
