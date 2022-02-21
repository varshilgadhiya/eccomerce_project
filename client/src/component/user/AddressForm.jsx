import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useState } from 'react';
import { Box, Button } from '@mui/material';

export default function AddressForm(props) {

  const [fullname, setFullname] = React.useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [cart, setcart] = useState([]);
  const id = localStorage.getItem("user")

  React.useEffect(() => {
    axios.get(`http://localhost:5000/cart/${id}`)
      .then((res) => {
        setcart(res.data.cart)
      })
  }, []);

  const handlePlaceOrder = (e) => {
    e.preventDefault()
    const data = {
      user: id,
      cart: cart,
      address: address,
      city: city,
      state: state,
      zipcode: zipcode
    }
    axios.post("http://localhost:5000/order/add", data)
      .then((res) => {
        alert("order placed successfully")
        axios.delete(`http://localhost:5000/cart/delete/${id}`)
        .then((value) => {
          console.log("cart Deleted");
        })
        props.next()
      })
      .catch((err) => {
        console.log("order placed unsuccessfully")
      })
  }





  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="FullName"
            name="firstName"
            onChange={(e) => setFullname(e.target.value)}
            label="Full name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            onChange={(e) => setAddress(e.target.value)}

            label="Address"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            onChange={(e) => setCity(e.target.value)}

            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            onChange={(e) => setState(e.target.value)}

            label="State"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="zip"
            name="zip"
            onChange={(e) => setZipcode(e.target.value)}

            label="Zip code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={props.back} sx={{ mt: 3, ml: 1 }}>
          Back
        </Button>
        <Button
          variant="contained"
          onClick={(e) => (handlePlaceOrder(e))}
          sx={{ mt: 3, ml: 1 }}
        >
          Place order
        </Button>
      </Box>
    </React.Fragment>
  );
}