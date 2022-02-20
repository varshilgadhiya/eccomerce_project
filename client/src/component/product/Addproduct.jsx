import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios'


const theme = createTheme();

export default function Addproduct() {

    const [name, setname] = React.useState('')
    const [price, setprice] = React.useState('')
    const [discription, setdiscription] = React.useState('')
    const [offer, setoffer] = React.useState([])
    const [category, setcategory] = React.useState('')


    const validation = (e, name, price, discription, offer, category) => {
        e.preventDefault()
        if (name == "" || price == "" || discription == "" || offer == "" || category == "") {
            alert("field can not empty")
        }
        else {
            var data = new FormData
            data.append("name", name)
            data.append("price", price)
            data.append("discrition", discrition)
            data.append("offer", offer)
            data.append("category", category)


            alert("added successfully")


            axios.post("http://localhost:3000/", data)
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
                        Add Product
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

                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="price"
                            onChange={(e) => setprice(e.target.value)}
                            name="price"
                            type="number"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="discription"
                            onChange={(e) => setdiscription(e.target.value)}
                            name="discription"
                            type="string"
                            autoFocus
                        />

                        {/* <input
              type="file"
              className='my-3'
              margin="normal"
              required
              fullWidth
              id="pic"
              onChange={(e) => setpic(e.target.files[0])}
              label="Profilr pic"
              name="pic"
            /> */}

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            onChange={(e) => setoffer(e.target.value)}
                            name="offer"
                            type="number"
                            id="offer"

                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            onChange={(e) => setcategory(e.target.value)}
                            name="category"

                            type="string"
                            id="category"

                        />
                        <button
                            onClick={(e) => { validation(e, name, price, discription, offer, category) }}
                            type="submit"
                            className='btn btn-success w-100 my-4'
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Add prodeuct
                        </button>
                        {/* 
                        <h4>
                            Don't have an account?  <a style={{ marginLeft: "25px" }} href="http://localhost:3000" >Login in</a></h4> */}

                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}