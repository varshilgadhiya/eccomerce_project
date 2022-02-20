import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    table: {
        minWidth: 650,

    },
});

export default function AlluserTable({ data }) {
    const classes = useStyles();
    return (
        <>
            <Typography variant="h4" className="text-center state my-4">State Wise Data</Typography>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>

                            <TableCell className="head" align="center">Name</TableCell>
                            <TableCell className="head text-primary" align="center">Email</TableCell>
                            <TableCell className="head text-danger" align="center">Phone</TableCell>
                            <TableCell className="head text-success" align="center">Pic</TableCell>
                            <TableCell className="head state" align="center">Role</TableCell>
                            <TableCell className="head state" align="center">Pass</TableCell>
                            <TableCell className="head state" align="center">Conpass</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* {
                            data.map((state) =>
                                <TableRow>
                                    <TableCell align="center">{state.region}</TableCell>
                                    <TableCell className="text-primary" align="center">{state.totalInfected}</TableCell>
                                    <TableCell className="text-danger" align="center">{state.activeCases}</TableCell>
                                    <TableCell className="text-success" align="center">{state.recovered}</TableCell>
                                    <TableCell className="state" align="center">{state.deceased}</TableCell>
                                </TableRow>
                            )
                        } */}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
