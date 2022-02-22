import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm';
import Review from './Review';
import axios from 'axios';
import { Link } from 'react-router-dom';



const steps = ['Cart Items', 'Shipping address'];


const theme = createTheme();

export default function Cart() {
  const [cart, setCart] = React.useState([]);
  const id = localStorage.getItem("user")
  React.useEffect(() => {
    axios.get(`http://localhost:5000/cart/${id}`)
      .then((res) => {
        setCart(res.data.cart)
        console.log(cart);
      })
  }, []);

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        {cart ?
          <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <Typography component="h1" variant="h4" align="center">
              Place Order
            </Typography>
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for your order.
                  </Typography>
                  <Typography variant="subtitle1">
                    Your order number is #2001539. We have emailed your order
                    confirmation, and will send you an update when your order has
                    shipped.
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {activeStep === 0 ?
                    <Review next={handleNext} back={handleBack} />
                    :
                    <AddressForm next={handleNext} back={handleBack} />
                  }
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
          :
          <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <Typography className='text-center text-danger' variant="h4">No Item in Cart</Typography>
            <Link style={{marginLeft:"25%"}} className="btn btn-primary w-50 my-4" to={"/shopping"}>Go to Shop</Link>
          </Paper>
        }
      </Container>
    </ThemeProvider>
  );
}