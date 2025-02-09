import React from 'react'
import DashboardProvider from '../../Components/DashboardProvider/DashboardProvider'
import EnhancedTable from '../../Components/Table'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const TeachersList = () => {
  const [teacherData,setTeacherData] = useState(null)
  const getData = async () => {
    await axios.get('http://localhost:3000/teachers/').then((res)=>setTeacherData(res.data))
  }
  useEffect(()=>{
    getData()
  },[])

  return (
    <DashboardProvider data={<EnhancedTable datas={teacherData} headPage='Teacher' />} />
  )
}

export default TeachersList