import Header from "./Header";
import Content from "./Content";


function Course(props) {
  const { course } = props;

    return (
      <div>
        <Header courseName={course.name} />
        <Content parts={course.parts} />
      </div>
    )
}

export default Course;