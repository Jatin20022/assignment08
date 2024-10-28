import React from "react";
import { useParams } from "react-router-dom";

const StudentDetails = ({ students }) => {
  const { id } = useParams();
  const student = students.find((s) => s.id === parseInt(id));

  if (!student) return <div>Student not found</div>;

  return (
    <div>
      <h1>{student.name}</h1>
      {/* Display all student details here */}
    </div>
  );
};

export default StudentDetails;
