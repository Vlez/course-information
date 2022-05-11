const Course = ({ courses }) => {
  return (
    <>
      {courses.map((course) => {
        return (
          <div key={course.id}>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
          </div>
        );
      })}
    </>
  );
};

const Header = ({ course }) => {
  return (
    <>
      <h1>{course}</h1>
    </>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part name={part.name} exercises={part.exercises} key={part.id} />
      ))}
    </div>
  );
};

const Part = ({ name, exercises }) => {
  return (
    <div>
      {name}: {exercises}
    </div>
  );
};

const Total = ({ parts }) => {
  const total = parts.map((part) => part.exercises).reduce((a, b) => a + b, 0);

  return (
    <p>
      <strong>total exercises: {total}</strong>
    </p>
  );
};

export default Course;
