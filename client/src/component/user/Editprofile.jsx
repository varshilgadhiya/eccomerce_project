import { Button, CardActions, CardContent, Grid, Typography } from "@mui/material"
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Editprofile = () => {
    const [user, setuser] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`http://localhost:5000/user/${localStorage.getItem("user")}`,{headers :{ "Authorization":`Bearer ${localStorage.getItem("token")}`}})
            .then((value) => {
                setuser(value.data)
                console.log(value.data)
                if (value.data.message || value.data.message === "Access Denied") {
                    navigate("/")
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);
    return (
        <Grid container className='px-4' spacing={2}>
            <Grid item sm={3} xs={12}>
                <CardContent>

                    <Typography gutterBottom variant="h6" component="div">
                        <MailIcon />{user.price}
                    </Typography>
                    <Typography gutterBottom variant="body1" component="div">
                        <PhoneIcon />{user.category}
                    </Typography>
                </CardContent>
                <CardActions>
                    {/* <Button className='my-4 mx-3' onClick={(e) => (handleCart(e, product._id))} variant='contained' size="small">&nbsp; Add To Cart</Button> */}
                </CardActions>
            </Grid>
        </Grid>

    )
}

export default Editprofile
