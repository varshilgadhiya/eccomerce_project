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

export default function Producttable({ data }) {
    const classes = useStyles();
    
    const [Product, setProduct] = useState(second)
    
    useEffect(() => {
        axios.get(`http://localhost:5000//${localStorage.getItem("Producttable")}`, { headers: `Bearer ${localStorage.getItem("token")}` })
            .then((value) => {
                setProduct(value.data)
                console.log(value.data)

            }, []);
    return (
        <>
            <Typography variant="h4" className="text-center state my-4">State Wise Data</Typography>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>

                            <TableCell className="head" align="center">Name</TableCell>
                            <TableCell className="head text-primary" align="center">Price</TableCell>
                            <TableCell className="head text-danger" align="center">discription</TableCell>
                            <TableCell className="head text-success" align="center">offer</TableCell>
                            <TableCell className="head state" align="center">category</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                    data.map((Product) =>
                                <TableRow>
                                    <TableCell align="center">{Product.name}</TableCell>
                                    <TableCell align="center">{Product.price}</TableCell>
                                    <TableCell align="center">{Product.discription}</TableCell>
                                    <TableCell align="center">{Product.offer}</TableCell>
                                    <TableCell align="center">{Product.category}</TableCell>
                                    

                                    
                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
})}
