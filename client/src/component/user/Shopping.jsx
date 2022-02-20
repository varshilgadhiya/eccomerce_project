import React, { useEffect, useState } from 'react'
import CheckCircleOutlineSharpIcon from '@material-ui/icons/CheckCircleOutlineSharp';
import ControlPointSharpIcon from '@material-ui/icons/ControlPointSharp';
import ErrorOutlineSharpIcon from '@material-ui/icons/ErrorOutlineSharp';
import NotInterestedSharpIcon from '@material-ui/icons/NotInterestedSharp';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Shopping = ({ product }) => {
    const navigate = useNavigate()
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/product/`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } })
            .then((value) => {
                setProducts(value.data)
                navigate = "/"
            })
    }, [])


    return (


        <div className="my-4">
            <h4 className="text-center state">All Products</h4>
            <hr />
            
        </div>

    )
}

export default Shopping
