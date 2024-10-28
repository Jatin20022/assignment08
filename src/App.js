import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import StudentList from "./components/StudentList";
import StudentRegistration from "./components/StudentRegistration";
import StudentDetails from "./components/StudentDetails";
import EditStudent from "./components/EditStudent";
import data from "./data.json";
import './App.css'

function App() {
  const [students, setStudents] = useState(data);

  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  const updateStudent = (updatedStudent) => {
    setStudents(
      students.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student
      )
    );
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard students={students} />} />
          <Route
            path="/students"
            element={<StudentList students={students} deleteStudent={deleteStudent} />}
          />
          <Route
            path="/register"
            element={<StudentRegistration addStudent={addStudent} />}
          />
          <Route
            path="/students/:id"
            element={<StudentDetails students={students} />}
          />
          <Route
            path="/students/:id/edit"
            element={<EditStudent students={students} updateStudent={updateStudent} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
