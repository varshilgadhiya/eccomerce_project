import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import Navigationbar from "../Navigationbar"

const Shopping = () => {
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
                navigate("/cart")
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <>
            <Navigationbar />


            <div className="my-4">
                <h4 className="text-center state">All Products</h4>
                <hr />
                <Grid container className='px-4' spacing={2}>
                    {products !== undefined ?
                        products.map((product, index) => (
                            <Grid item sm={3} xs={12}>
                                <div class="product-card">
                                    <img src={product.pic[0]} height={200} width={"100%"} alt={product.name} />
                                    <h3 className='my-2'>{product.name}</h3>
                                    <p class="price">Rs.{product.price}&nbsp;&nbsp;&nbsp;<span class="badge bg-danger text-white">{product.offer} %</span></p>
                                    <p>{product.discription.slice(0,25)}...</p>
                                    <p className='py-0'><button onClick={(e) => (handleCart(e, product._id))}>Add to Cart</button></p>
                                </div>
                            </Grid>
                        ))
                        :
                        null
                    }
                </Grid>

            </div>

        </>
    )
}

export default Shopping
