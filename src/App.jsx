import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardProvider from './Components/DashboardProvider/DashboardProvider'
import Dashboard from './Screens/Dashboard'
import StudentsList from './Screens/Student/StudentsList'
import StudentAdd from './Screens/Student/StudentAdd'
import StudentUpdate from './Screens/Student/StudentUpdate'
import TeacherUpdate from './Screens/Teacher/TeacherUpdate'
import TeachersList from './Screens/Teacher/TeachersList'
import TeacherAdd from './Screens/Teacher/TeacherAdd'

const App = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/"  /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/students' element={<StudentsList />} />
        <Route path="/students/students_list" element={<StudentsList />} />
        <Route path='/students/add_student' element={<StudentAdd />} />
        <Route path='/students/update_student' element={<StudentUpdate />} />
        <Route path="/teachers/teachers_list" element={<TeachersList />} />
        <Route path='/teachers/add_teacher' element={<TeacherAdd />} />
        <Route path='/teachers/update_teacher' element={<TeacherUpdate />} />
      </Routes>
    </>
  )
}

export default App