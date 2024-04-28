import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import TrainerDashboard from './pages/TrainerDashboard';
import AssessmentCreation from './pages/AssessmentCreation';
import StudentDashboard from './pages/Student';
import Assessment from './pages/Assessment'; // Import your Assessment component
import { UserProvider } from './pages/UserContext';
import MentorDashboard from './pages/MentorDashboard';
import Analytics from './pages/Analytics';
function App() {
    return (
        <div className='cntainer'>
        <UserProvider>

        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="trainer-dashboard" element={<TrainerDashboard />} />
                <Route path="student-dashboard" element={<StudentDashboard />} />
                <Route path="mentor-dashboard" element={<MentorDashboard/>} />
                <Route path="student-analytics/:assessmentId" element={<Analytics/>} />

                <Route path="student-dashboard/:assessmentId" element={<Assessment />} />
                <Route path="create-assessment" element={<AssessmentCreation />} />
            </Routes>
        </BrowserRouter>
        </UserProvider>
        </div>
    );
}

export default App;

