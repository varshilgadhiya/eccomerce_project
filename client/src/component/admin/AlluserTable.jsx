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
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
    table: {
        minWidth: 650,

    },
});

export default function AlluserTable() {
    const classes = useStyles();
    const [Alluser, setAlluser] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`http://localhost:5000/`, { headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` } })
        .then((value) => {
            setAlluser(value.data)
            console.log(value.data)
            if (value.data.message || value.data.message === "Access Denied") {
                navigate("/")
            }
        })
    }, []);
    return (
        <>
            <Typography variant="h4" className="text-center state my-4">All Users</Typography>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className="head" align="center">User Id</TableCell>
                            <TableCell className="head" align="center">Pic</TableCell>
                            <TableCell className="head" align="center">Name</TableCell>
                            <TableCell className="head" align="center">Email</TableCell>
                            <TableCell className="head" align="center">Phone</TableCell>
                            <TableCell className="head" align="center">Role</TableCell>
                            <TableCell className="head" align="center">Pass</TableCell>
                            <TableCell className="head" align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            Alluser.map((data,index) => (
                                <TableRow>
                                    <TableCell className="head" align="center">{index +1}</TableCell>
                                    <TableCell align="center"><img src={data.pic} height={"55px"} width={"55px"} alt="" srcset="" /></TableCell>
                                    <TableCell align="center">{data.name}</TableCell>
                                    <TableCell align="center">{data.email}</TableCell>
                                    <TableCell align="center">{data.phone}</TableCell>
                                    <TableCell align="center">{data.role}</TableCell>
                                    <TableCell align="center">{data.pass}</TableCell>
                                    <TableCell align="center"><button className="btn btn-info"><i class="fa fa-eye" aria-hidden="true"></i></button></TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
