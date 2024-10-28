import React from "react";
import { useParams } from "react-router-dom";

const StudentDetails = ({ students }) => {
  const { id } = useParams();
  const student = students.find((s) => s.id === parseInt(id));

  if (!student) return <div>Student not found</div>;

  return (
    <div>
      <h1 style={{color:'red', textAlign: 'center'}}>Student Detail</h1>
      <h2>Name: {student.name}</h2>
      <h2>Email: {student.email}</h2>
      <h2>Age: {student.age}</h2>
      <h2>Class: {student.class}</h2>
      <h2>Address: {student.address}</h2>
      <h2>Phone number: {student.phone}</h2>
      {/* Display all student details here */}
    </div>
  );
};

export default StudentDetails;
