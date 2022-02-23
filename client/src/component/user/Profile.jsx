import { ListGroup, ListGroupItem, Card } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import { height, style } from '@mui/system'
import EditIcon from '@mui/icons-material/Edit';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import Navigationbar from "../Navigationbar"


const Profile = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState([]);
    const id = localStorage.getItem("user")
    useEffect(() => {
        axios.get(`http://localhost:5000/user/${id}`, { headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` } })
            .then((value) => {
                setUser(value.data)
                console.log(user)
                if (value.data.message || value.data.message === "Access Denied") {
                    navigate("/")
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);

    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     axios.post("http://localhost:5000/Edit")
    //         .then((res) => {

    //             window.location = "/Editprofile"
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // };


    return (
        <>
            <Navigationbar />
            <div className='background' >
                <Grid container spacing={2}>
                    <Grid item sm={4} xs={0}></Grid>
                    <Grid item sm={4} xs={12}>
                        <Card className='p-4 profilecard' >
                            <Card.Img variant="top" height={"300px"} src={user.pic} />
                            <Card.Body>
                                <h2 className='text-primary'>Profile<hr /></h2>
                            </Card.Body>
                            <div className='right' style={{ marginLeft: "10px" }} >
                                <h4>Profile Detail</h4>
                                <h5><MailIcon /> {user.email}</h5>
                                <h5><PhoneIcon /> {user.phone}</h5>
                            </div>
                            <button
                                // onClick={(e) => (handleSubmit(e))}
                                className='btn btn-primary w-50'
                                variant="contained"
                                sx={{ mt: 1, mb: 1 }}
                                style={{ marginLeft: "60px" }}
                            >

                                <EditIcon /> Edit Profile
                            </button>

                        </Card>
                    </Grid>
                    <Grid item sm={4} xs={0}></Grid>

                </Grid>

            </div>

        </>
    )
}

export default Profile