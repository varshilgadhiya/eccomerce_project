import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function Producttable() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [Product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/product/`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((value) => {
        setProduct(value.data);
        console.log(value.data);
        if (value.data.message || value.data.message === "Access Denied") {
          navigate("/");
        }
      });
  }, []);
  const handledelete = (e,id) => {
      e.preventDefault()
    axios.delete(`http://localhost:5000/product/delete/${id}`)
    .then((res)=>{
        if(res.data.success === "product has been delete"){
            console.log(res)
            alert("delete successfully")
            navigate(0)
        }
        else if(res.data.error){
            alert("error")
        }
    })


  };

  const handleupdate = (e,id) =>{
      navigate(`/upadate-product/${id}`)
  }

    
  return (
    <>
      <Typography variant="h4" className="text-center state my-4">
        All Products
      </Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="head fw-bold" align="center">
                Product Id
              </TableCell>
              <TableCell className="head fw-bold" align="center">
                Product Name
              </TableCell>
              <TableCell className="head fw-bold" align="center">
                Product Price
              </TableCell>
              <TableCell className="head fw-bold" align="center">
                Product Discription
              </TableCell>
              <TableCell className="head fw-bold" align="center">
                Product Offer
              </TableCell>
              <TableCell className="head fw-bold" align="center">
                Category
              </TableCell>
              <TableCell className="head fw-bold" colSpan={2} align="center">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Product.map((data, index) => (
              <TableRow>
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell align="center">{data.name}</TableCell>
                <TableCell align="center">{data.price}</TableCell>
                <TableCell align="center">{data.discription}</TableCell>
                <TableCell align="center">{data.offer}</TableCell>
                <TableCell align="center">{data.category}</TableCell>
                <TableCell align="center">
                  <button className="btn btn-warning" onClick={(e)=> handleupdate(e,data._id)}>
                    <i class="fa fa-pencil" aria-hidden="true"></i>
                  </button>
                </TableCell>
                <TableCell align="center">
                  <button
                    onClick={(e) => handledelete(e, data._id)}
                    className="btn btn-danger"
                  >
                    <i class="fa fa-trash" aria-hidden="true"></i>
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
