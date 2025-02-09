import * as React from 'react'
import { Box, Paper, Radio, RadioGroup, TextField } from '@mui/material'
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
import { GoogleIcon, FacebookIcon, SitemarkIcon } from '../CustomIcon';

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

export default function SignUp(props) {
    // const [emailError, setEmailError] = React.useState(false);
    // const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
    //   const [classError, setClassError] = React.useState(false);
    //   const [classErrorMessage, setClassErrorMessage] = React.useState('');
    //   const [ageError, setAgeError] = React.useState(false);
    //   const [ageErrorMessage, setAgeErrorMessage] = React.useState('');
    //   const [nameError, setNameError] = React.useState(false);
    //   const [nameErrorMessage, setNameErrorMessage] = React.useState('');

    // const validateInputs = () => {
    //     const email = document.getElementById('email');
    //     const classs = document.getElementById('class');
    //     const age = document.getElementById('age');
    //     const name = document.getElementById('name');

    //     let isValid = true;

    //     if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
    //         setEmailError(true);
    //         setEmailErrorMessage('Please enter a valid email address.');
    //         console.log('mailErrorMessage')
    //         isValid = false;
    //     } else {
    //         setEmailError(false);
    //         setEmailErrorMessage('');
    //     }

    //     if (!classs.value || classs.value == 0 || classs.value < 0) {
    //         setClassError(true);
    //         setClassErrorMessage('Enter Correct Class');
    //         console.log('classErrorMessage')
    //         isValid = false;
    //     } else {
    //         setClassError(false);
    //         setClassErrorMessage('');
    //     }

    //     if (!age.value || age.value == 0 || age.value < 0) {
    //         setAgeError(true);
    //         setAgeErrorMessage('Enter Correct Age');
    //         console.log('ageErrorMessage')
    //         isValid = false;
    //     } else {
    //         setAgeError(false);
    //         setAgeErrorMessage('');
    //     }

    //     if (!name.value || name.value.length < 1) {
    //         setNameError(true);
    //         setNameErrorMessage('Name is required.');
    //         console.log('nameErrorMessage')
    //         isValid = false;
    //     } else {
    //         setNameError(false);
    //         setNameErrorMessage('');
    //     }

    //     return isValid;
    // }
    // const handleSubmit = (event) => {
    //     if (nameError || emailError || ageError || classError) {
    //         event.preventDefault();
    //         return;
    //     }
    // //     const data = new FormData(event.currentTarget);
    // // console.log({
    // //   name: data.get('name'),
    // //   age: data.get('age'),
    // //   email: data.get('email'),
    // //   classs: data.get('class'),
    // // });
    // }
    return (
        null
    );
}