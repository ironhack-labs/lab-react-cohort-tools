import React from 'react';
import { useParams } from 'react-router-dom';
import studentsData from '../assets/students.json';
import placeholderImage from '../assets/placeholder.png';

function StudentDetailsPage() {
  const { studentId } = useParams(); 
  const studentProfile = studentsData.find(student => student._id === studentId);

  
  if (!studentProfile) {
    return <div>Student not found</div>;
  }

  
  return (
    <div className="StudentDetailsPage">
      <h1>Student Details Page</h1>
      <div className="bg-white p-8 rounded-lg shadow-md mb-6">
        <img
          src={studentProfile.image || placeholderImage}
          alt={studentProfile.firstName}
          className="rounded-full w-32 h-32 object-cover border-2 border-gray-300"
        />
        <h1 className="text-2xl mt-4 font-bold">
          {studentProfile.firstName} {studentProfile.lastName}
        </h1>
        <p><strong>Email:</strong> {studentProfile.email}</p>
        <p><strong>Program:</strong> {studentProfile.program}</p>
        <p><strong>LinkedIn:</strong> <a href={studentProfile.linkedinUrl} target="_blank" rel="noopener noreferrer">{studentProfile.linkedinUrl}</a></p>
        <p><strong>Languages:</strong> {studentProfile.languages.join(", ")}</p>
        <p><strong>Background:</strong> {studentProfile.background}</p>
        
      </div>
    </div>
  );
}

export default StudentDetailsPage;
