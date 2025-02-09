import React from 'react'
import DashboardProvider from '../../Components/DashboardProvider/DashboardProvider'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import EnhancedTable from '../../Components/Table'

const StudentsList = () => {
  const [studentData,setStudentData] = useState(null)
  const getData = async () => {
    await axios.get('http://localhost:3000/students/').then((res)=>setStudentData(res.data))
  }
  useEffect(()=>{
    getData()
  },[])

  return (
    <DashboardProvider data={<EnhancedTable datas={studentData} headPage='Students List' />} />
  )
}

export default StudentsList