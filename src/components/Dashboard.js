import React from 'react';
import { Link } from 'react-router-dom';
import studentData from '../data.json'; // Adjust the path as needed

const Dashboard = () => {
    const totalStudents = studentData.length;
    const classCounts = studentData.students.reduce((acc, student) => {
      const className = student.class;
      acc[className] = (acc[className] || 0) + 1;
      return acc;
  }, {});
    return (
        <div className="dashboard">
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/students">Student List</Link>
                    </li>
                    <li>
                        <Link to="/register">Register Student</Link>
                    </li>
                </ul>
            </nav>
            <div className="stats">
                <h1>Dashboard</h1>
                <p>Total Number of Students: {totalStudents}</p>
                <h2>Students per Class</h2>
                <ul>
                    {Object.entries(classCounts).map(([className, count]) => (
                        <li key={className}>
                            {className}: {count}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
