import React, { useState } from 'react';
import studentData from '../data.json'; // Adjust the path as needed

const RegisterStudent = () => {
    const [studentName, setStudentName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [className, setClassName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^[0-9]{10}$/; // Adjust as necessary for your phone number format

        if (!studentName) newErrors.studentName = 'Student Name is required';
        if (!email || !emailPattern.test(email)) newErrors.email = 'Valid Email is required';
        if (!age || isNaN(age) || age <= 0) newErrors.age = 'Valid Age is required';
        if (!className) newErrors.className = 'Class is required';
        if (!address) newErrors.address = 'Address is required';
        if (!phoneNumber || !phonePattern.test(phoneNumber)) newErrors.phoneNumber = 'Valid Phone Number is required';

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        const newStudent = {
            name: studentName,
            email,
            age: parseInt(age),
            class: className,
            address,
            phone: phoneNumber,
        };

        // You can now add the new student to your student data or send it to your server
        console.log('New Student Registered:', newStudent);

        // Reset the form
        setStudentName('');
        setEmail('');
        setAge('');
        setClassName('');
        setAddress('');
        setPhoneNumber('');
        setErrors({});
    };

    return (
        <div className="register-student">
            <h1>Register New Student</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Student Name:</label>
                    <input
                        type="text"
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                    />
                    {errors.studentName && <p className="error">{errors.studentName}</p>}
                </div>

                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>

                <div>
                    <label>Age:</label>
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                    {errors.age && <p className="error">{errors.age}</p>}
                </div>

                <div>
                    <label>Class:</label>
                    <input
                        type="text"
                        value={className}
                        onChange={(e) => setClassName(e.target.value)}
                    />
                    {errors.className && <p className="error">{errors.className}</p>}
                </div>

                <div>
                    <label>Address:</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    {errors.address && <p className="error">{errors.address}</p>}
                </div>

                <div>
                    <label>Phone Number:</label>
                    <input
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
                </div>

                <button type="submit">Register Student</button>
            </form>
        </div>
    );
};

export default RegisterStudent;
