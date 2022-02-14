import React, { useState } from 'react'

const App = () => {
  const[students, setStudents] = useState([{
    id: 123,
    name: 'Ram',
    marks: 90
  }, {
    id: 445,
    name: 'John',
    marks: 75
  }]);

  const handleSubmit = () => {
    setStudents(students.map(
      obj => (obj.id === 445 ? Object.assign(obj, { marks: 45 }) : obj)
    ))
  }; 


  return (
    <div>
      {JSON.stringify(students)}
      <button type="submit" onClick={handleSubmit}>set student</button>
    </div>
  )
}

export default App