import Course from "./Components/Course"

const App = () => {
  const course = [{
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 20,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Example',
        exercises: 10,
        id: 4
      }
    ]},
    {
    id: 2,
    name: 'Node js',
    parts: [
      {
        name: 'Fundamentals of Node',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a Node component',
        exercises: 14,
        id: 3
      }
    ]

  }]

  return <Course courses={course} />
}

export default App