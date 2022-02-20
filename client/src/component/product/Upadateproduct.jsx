import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';


const theme = createTheme();

export default function Addproduct() {
  const [coloumn, setcoloumn] = React.useState([]);
  const { id } = useParams();
  const navigate = useNavigate()

  React.useEffect(() => {
    axios.get(`http://localhost:5000/product/one/${id}`)
      .then((res) => {
        console.log(res.data);
        setcoloumn(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    const productprice = document.getElementById("price").value
    const productoffer = document.getElementById("offer").value
    if (productprice == "" || productoffer == "") {
      alert("field can not empty");
    } else {
      var data = {
        "productprice":productprice,
        "productoffer":productoffer,
      };
      axios.post(`http://localhost:5000/product/update/${id}`, data)
        .then((res) => navigate("/all-product"))
        .catch((err) => console.log(err));
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            className="text-center text-danger"
          >
            Add Product
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
              <label htmlFor="price">Product Price</label>
            <input
            className="form-control size-lg mb-4"
            margin="normal"
            required
            fullWidth
            label="Product price"
            id="price"
            defaultValue={coloumn.price}
            name="price"
            type="number"
            />
              <label className="mt-4" htmlFor="price">Product Offer</label>
            <input
            className="form-control size-lg mb-4"
              margin="normal"
              required
              fullWidth
              label="Product offer"
              defaultValue={coloumn.offer}
              name="offer"
              type="text"
              id="offer"
            />
            <button
              onClick={(e) => handleUpdate(e)}
              type="submit"
              className="btn btn-success w-100 my-4"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update Product
            </button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
