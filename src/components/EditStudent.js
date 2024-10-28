import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditStudent = ({ students, updateStudent }) => {
  const { id } = useParams();
  const student = students.find((s) => s.id === parseInt(id));
  const [formData, setFormData] = useState(student || {});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateStudent(formData);
    navigate("/students");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Render input fields with pre-populated data */}
      <button type="submit">Update Student</button>
    </form>
  );
};

export default EditStudent;
