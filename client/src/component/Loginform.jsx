import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Link} from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}                    
      {'.'}
    </Typography>
  );
}                  

const theme = createTheme();

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
const navigate = useNavigate()


  const handleSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    const credential = {
      email: email,
      pass: pass,
    }
    axios.post("http://localhost:5000/login",credential)
    .then((res)=>{
      localStorage.setItem("token",res.data.token)
      localStorage.setItem("user",res.data.id)
      localStorage.setItem("role",res.data.role)
      navigate("/profile")
    })
    .catch((err)=>{
      console.log(err)
    })
  };

  return (
      <div className='Login'>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Typography component="h1" variant="h5" className='text-center text-danger'>
            Sign form
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={(e)=>(setEmail(e.target.value))}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={(e)=>(setPass(e.target.value))}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
           
            <Button
              type="submit"
              fullWidth
              onClick={(e)=>(handleSubmit(e))}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <h6>
                    create a new account?  <Link to="/registration" >Registration form</Link></h6>
        
           
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
      </div>
  );
}