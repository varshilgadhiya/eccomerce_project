import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import axios from 'axios';
import Navigationbar from "../Navigationbar"
import { Navigate, useNavigate } from 'react-router-dom';


const useStyles = makeStyles({
    table: {
        minWidth: 650,

    },
});

export default function AllorderTable() {
    const classes = useStyles();
    const navigate = useNavigate()

    const [user, setUser] = useState([])
    const [AllOrder, setAllOrder] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/order`)
            .then((value) => {
                setAllOrder(value.data)
            });
    }, []);


const overview = () => {
    navigate("/overview")

}

    return (
        <>
        <Navigationbar />
            <Typography variant="h4" className="text-center state my-4">All Order</Typography>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className="head" align="center">Order Id</TableCell>
                            <TableCell className="head" align="center">Username</TableCell>
                            <TableCell className="head" align="center">Email</TableCell>
                            <TableCell className="head" align="center">Status</TableCell>
                            <TableCell className="head" align="center">Items</TableCell>
                            <TableCell className="head" align="center">Address</TableCell>
                            <TableCell className="head" align="center">City</TableCell>
                            <TableCell className="head" align="center">State</TableCell>
                            <TableCell className="head" align="center">Zipcode</TableCell>
                            <TableCell className="head" align="center">Cart Price</TableCell>
                            <TableCell className="head" align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            AllOrder.map((data, index) => (
                                <TableRow>
                                    <TableCell className="head" align="center">{index + 1}</TableCell>
                                    <TableCell align="center">{data.User.name}</TableCell>
                                    <TableCell align="center">{data.User.email}</TableCell>
                                    <TableCell align="center">{data.status}</TableCell>
                                    <TableCell align="center">{data.cart.length} Items</TableCell>
                                    <TableCell align="center">{data.address}</TableCell>
                                    <TableCell align="center">{data.city}</TableCell>
                                    <TableCell align="center">{data.state}</TableCell>
                                    <TableCell align="center">{data.zip}</TableCell>
                                    <TableCell align="center">Rs.{data.total}</TableCell>
                                    <TableCell align="center"><button className="btn btn-info"><i class="fa fa-eye" onClick={(e)=> overview(e)}    aria-hidden="true"></i></button></TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
