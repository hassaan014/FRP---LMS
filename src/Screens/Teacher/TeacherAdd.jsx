// import React from 'react'
import DashboardProvider from '../../Components/DashboardProvider/DashboardProvider'
import SignUp from '../../Components/Form/Form';
import * as React from 'react'
import { Box, LinearProgress, Paper, Radio, RadioGroup, TextField } from '@mui/material'
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
// import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
// import AppTheme from '../shared-theme/AppTheme';
// import ColorModeSelect from '../shared-theme/ColorModeSelect';
import { GoogleIcon, FacebookIcon, SitemarkIcon } from '../../Components/CustomIcon';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
  height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
  minHeight: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage:
      'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage:
        'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}));

const TeacherAdd = () => {
  const [get, setGet] = React.useState(false);
  // const [teacherData,setTeacherData] = useState(null)
  // const getData = async () => {
  //   await axios.get('http://localhost:3000/teachers/').then((res)=>setTeacherData(res.data))
  // }
  // useEffect(()=>{
  //   getData()
  // },[])
  const Navigate = useNavigate()

  React.useEffect(() => {

  }, [get])
  const [teacherName, setTeacherName] = React.useState()

  const [teacherData, setTeacherData] = React.useState({
    name: '',
    email: '',
    subject: '',
    class: '',
  })
  const inputVal = (e) => {
    setTeacherData({
      ...teacherData,
      [e.target.name]: e.target.value,
    })
  }
  useEffect(() => {
    const timeOutId = setTimeout(() => setTeacherData({...teacherData,name: teacherName}), 200);
    return () => clearTimeout(timeOutId);
  },[teacherName]);

  const addStudent = async () => {
    // const [teacherData,setTeacherData] = useState(null)
    console.log(teacherData);
    await axios.post('http://localhost:3000/teachers/', teacherData);
    setTeacherData({
      name: '',
      email: '',
      subject: '',
      class: '',
    })
    Navigate('/teachers/teachers_list/');
  }
  return (
    <DashboardProvider data={
      <>
        {/* {loader ? <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>: null} */}
        <SignUpContainer direction="column" justifyContent="space-between">
          <Card variant="outlined">
            {/* <SitemarkIcon /> */}
            <Typography
              component="h1"
              variant="h4"
              sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
            >
              Add Teacher
            </Typography>
            <Box onSubmit={(e) => { e.preventDefault(); addStudent() }}
              component="form"
              sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
            >
              <FormControl>
                {/* <FormLabel htmlFor="name">Full name</FormLabel> */}
                <TextField
                  autoComplete="name"
                    name="name"
                  required
                  type='text'
                  fullWidth
                  id="name"
                  label="Full Name"
                  // value={teacherData.name}
                  onChange={(e)=>setTeacherName(e.target.value)}
                  value={teacherName}
                />
              </FormControl>
              <FormControl>
                {/* <FormLabel htmlFor="email">Email</FormLabel> */}
                <TextField
                  required
                  fullWidth
                  type='email'
                  name='email'
                  id="email"
                  //   placeholder="your@email.com"
                  //   name="email"
                  //   autoComplete="email"
                  variant="outlined"
                  label="Email Address"
                  // value={teacherData.email}
                  onChange={inputVal}
                />
              </FormControl>
              <FormControl>
                {/* <FormLabel htmlFor="password">Password</FormLabel> */}
                <TextField
                  required
                  fullWidth
                  name="subject"
                  type="text"
                  id="subject"
                  variant="outlined"
                  label="Subject"
                  // value={teacherData.subject}

                  onChange={inputVal}
                />
              </FormControl>
              <FormControl>
                {/* <FormLabel htmlFor="password">Password</FormLabel> */}
                <TextField
                  required
                  fullWidth
                  name="class"
                  id="class"
                  variant="outlined"
                  type='number'
                  label="Class"
                  // value={teacherData.class}
                  onChange={inputVal}
                />
              </FormControl>
              <Button
                fullWidth
                type='submit'
                variant="contained"
                onCLick={() => { console.log(12345); addStudent(); setGet(true) }}
              >
                Add Teacher
              </Button>
            </Box>

          </Card>
        </SignUpContainer>
      </>
    } />

  )
}

export default TeacherAdd