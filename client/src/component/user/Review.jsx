import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import axios from 'axios';
import { Box, Button } from '@mui/material';

export default function Review(props) {
  const [cart, setCart] = React.useState([]);
  const [cartitems, setcartitems] = React.useState([]);
  var total = 0
  const fetch = () => {
    var id = localStorage.getItem("user")
    axios.get(`http://localhost:5000/cart/${id}`)
      .then((res) => {
        setCart(res.data.cart)
        console.log(cart)
        total = 0
        
      })
  }
  React.useEffect(() => {
    fetch()
  }, []);
  if(cart){
  cart.map((value) => (
    total += value.price
  ))
}
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cart?cart.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.discription} />
            <Typography variant="body2">Rs.{product.price}</Typography>
          </ListItem>
        )):null}
        <hr />
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            Rs.{total}
          </Typography>
        </ListItem>
      </List>
      <hr />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={props.next} variant="contained" sx={{ mt: 3, ml: 1 }}>
          Next
        </Button>
      </Box>
    </React.Fragment>
  );
}