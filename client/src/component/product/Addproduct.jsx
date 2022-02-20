import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const theme = createTheme();

export default function Addproduct() {
    const navigate = useNavigate()
    const [Productname, setProductname] = React.useState('')
    const [Productprice, setProductprice] = React.useState('')
    const [Productdiscription, setProductdiscription] = React.useState('')
    const [Productoffer, setProductoffer] = React.useState()
    const [Productcategory, setProductcategory] = React.useState('')
    const [Productpic, setProductpic] = React.useState([])


    const validation = (e, Productname, Productprice, Productdiscription, Productoffer, Productcategory) => {
        e.preventDefault()
        if (Productname == "" || Productprice == "" || Productdiscription == "" || Productoffer == "" || Productcategory == "") {
            alert("field can not empty")
        }
        else {

            const data = new FormData()
            data.append("productname", Productname)
            data.append("productprice", Productprice)
            data.append("productdiscription", Productdiscription)
            data.append("productoffer", Productoffer)
            data.append("productcategory", Productcategory)
            for (let i = 0; i < Productpic.length; i++) {
                data.append("productpic", Productpic[i])
            }

            axios.post("http://localhost:5000/product/create", data)
                .then((res) => {
                    if (res.data.success) {
                        alert("product added")
                        navigate("/all-product")
                    }
                })
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
                            id="Productname"
                            label="Product Name"
                            name="Full Name"
                            onChange={(e) => setProductname(e.target.value)}
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Product price"
                            id="Productprice"
                            onChange={(e) => setProductprice(e.target.value)}
                            name="price"
                            type="number"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            id="discription"
                            fullWidth
                            label="Product discription"
                            onChange={(e) => setProductdiscription(e.target.value)}
                            name="discription"
                            type="string"
                            autoFocus
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Product offer"
                            onChange={(e) => setProductoffer(e.target.value)}
                            name="offer"
                            type="string"
                            id="offer"

                        />
                        <TextField
                            margin="normal"
                            required
                            label="Product category"
                            fullWidth
                            onChange={(e) => setProductcategory(e.target.value)}
                            name="category"

                            type="string"
                            id="category"

                        />
                        <input
                            margin="normal"
                            required
                            label="Product category"
                            fullWidth
                            onChange={(e) => setProductpic(e.target.files)}
                            name="category"
                            className='form-control'
                            type="file"
                            id="category"
                            multiple

                        />
                        <button
                            onClick={(e) => { validation(e, Productname, Productprice, Productdiscription, Productoffer, Productcategory) }}
                            type="submit"
                            className='btn btn-success w-100 my-4'
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Add product
                        </button>

                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}