import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './Menu';
import ClassroomForm from './ClassroomForm';
import DepartmentForm from './DepartmentForm';
import CourseForm from './CourseForm';
import InstructorForm from './InstructorForm';
import SectionForm from './SectionForm';
import TeachesForm from './TeachesForm';
import StudentForm from './StudentForm';
import TakesForm from './TakesForm';
import AdvisorForm from './AdvisorForm';
import TimeSlotForm from './TimeSlotForm';
import PrereqForm from './PrereqForm';

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/classroom" element={<ClassroomForm />} />
        <Route path="/department" element={<DepartmentForm />} />
        <Route path="/course" element={<CourseForm />} />
        <Route path="/instructor" element={<InstructorForm />} />
        <Route path="/section" element={<SectionForm />} />
        <Route path="/teaches" element={<TeachesForm />} />
        <Route path="/student" element={<StudentForm />} />
        <Route path="/takes" element={<TakesForm />} />
        <Route path="/advisor" element={<AdvisorForm />} />
        <Route path="/timeslot" element={<TimeSlotForm />} />
        <Route path="/prereq" element={<PrereqForm />} />
      </Routes>
    </Router>
  );
}

export default App;
