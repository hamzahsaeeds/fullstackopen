import Header from "./Header";
import Content from "./Content";

// const Total = ({ sum }) => <p>Number of exercises {sum}</p>

function Course(props) {
  const { course } = props;

    return (
      <div>
        <Header courseName={course.name} />
        <Content parts={course.parts} />
        {/* <Total sum={parts[0].exercises + parts[1].exercises + parts[2].exercises} /> */}
      </div>
    )
}

export default Course;