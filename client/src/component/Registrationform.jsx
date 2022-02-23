import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios'
import { Link } from 'react-router-dom';


const theme = createTheme();

export default function SignIn() {

  const [name, setname] = React.useState('')
  const [email, setemail] = React.useState('')
  const [phone, setphone] = React.useState('')
  const [pic, setpic] = React.useState([])
  const [pass, setpass] = React.useState('')
  const [conpass, setconpass] = React.useState('')

  const validation = (e, name, email, phone, pass, conpass) => {
    e.preventDefault()
    if (name == "" || email == "" || phone == "" || pass == "" || conpass == "") {
      alert("field can not empty")
    }
    else if (name.lenght <= 2) {
      alert("name is not valid")
    }
    else if (phone.lenght < 10) {
      alert("number is not valid")
    }
    else if (pass !== conpass) {
      alert("password does not match")
    }
    else {
      var data = new FormData
      data.append("name", name)
      data.append("email", email)
      data.append("pass", pass)
      data.append("phone", phone)
      data.append("pic", pic)
      data.append("conpass", conpass)

      alert("added successfully")


      axios.post("http://localhost:5000/create/", data)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

    }
  }
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5" className='text-center text-danger'>
            Registration form
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Full Name"
              name="Full Name"
              onChange={(e) => setname(e.target.value)}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              onChange={(e) => setemail(e.target.value)}
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="phone"
              onChange={(e) => setphone(e.target.value)}
              label="Mobile"
              name="mobile"
              autoComplete="email"
              autoFocus
            />

            <input
              type="file"
              className='my-3'
              margin="normal"
              required
              fullWidth
              id="pic"
              onChange={(e) => setpic(e.target.files[0])}
              label="Profilr pic"
              name="pic"
            />

            <TextField
              margin="normal"
              required
              fullWidth
              onChange={(e) => setpass(e.target.value)}
              name="password"
              label="Password"
              type="password"
              id="pass"
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={(e) => setconpass(e.target.value)}
              name="password"
              label="Conform Password"
              type=" password"
              id="conpass"
              autoComplete="current-password"
            />
            <button
              onClick={(e) => { validation(e, name, email, phone, pass, conpass) }}
              type="submit"
              className='btn btn-success w-100 my-4'
              fullWidth
              sx={{ mt: 3, mb: 2 }}
            >
              SIGN UP
            </button>
            <h6>
              Don't have an account?  <Link to="/" >Login</Link>
            </h6>

          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}