import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

const Shopping = ({ product }) => {
    const navigate = useNavigate()
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/product/`, { headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` } })
            .then((value) => {
                setProducts(value.data)
                console.log(products);
            })
    }, [])

    const handleCart = (e, id) => {
        e.preventDefault()
        var data = {
            user: localStorage.getItem("user"),
            item: id
        }
        axios.post("http://localhost:5000/cart/add-item", data)
            .then((value) => {
                alert("add to cart successfully")
                navigate("/shopping")
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (


        <div className="my-4">
            <h4 className="text-center state">All Products</h4>
            <hr />
            <Grid container className='px-4' spacing={2}>
                {products !== undefined ?
                    products.map((product, index) => (
                        <Grid item sm={3} xs={12}>
                            <Card className='p-card' sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={product.pic ? product.pic[0] : null}
                                    alt={product.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {product.name}
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="div">
                                        Rs.{product.price} <span class="badge bg-warning text-dark">{product.offer} %</span>
                                    </Typography>
                                    <Typography gutterBottom variant="body1" component="div">
                                        {product.category}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {product.discription}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button className='my-4 mx-3' onClick={(e) => (handleCart(e, product._id))} variant='contained' size="small"><ShoppingCartIcon />&nbsp; Add To Cart</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))
                    :
                    null
                }
            </Grid>

        </div>

    )
}

export default Shopping
