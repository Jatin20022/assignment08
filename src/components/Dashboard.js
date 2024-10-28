import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import studentData from '../data.json'; // Adjust the path as needed

const Dashboard = () => {
    const [totalStudents, setTotalStudents] = useState(0);
    const [classCounts, setClassCounts] = useState({});

    useEffect(() => {
        if (studentData && studentData.students) {
            // Set the total number of students
            setTotalStudents(studentData.students.length);
            
            // Calculate class counts
            const counts = studentData.students.reduce((acc, student) => {
                const className = student.class;
                acc[className] = (acc[className] || 0) + 1;
                return acc;
            }, {});
            setClassCounts(counts);
        } else {
            console.error("No student data found!");
        }
    }, []);

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
