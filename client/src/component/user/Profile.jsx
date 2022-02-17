import { ListGroup, ListGroupItem, Card } from 'react-bootstrap'
import React from 'react'
import { height, style } from '@mui/system'
import EditIcon from '@mui/icons-material/Edit';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';


const Profile = () => {
    return (
        <div className='row' >
            <div className="left" style={{ background: "transprent" }}>
                <Card style={{ width: '350px', marginLeft: "500px", marginTop: "5px", height: "500px" }}  >
                    <Card.Img variant="top" src="https://media.istockphoto.com/photos/renewable-energy-and-sustainable-development-picture-id1186330948" />
                    <Card.Body>
                        <h2 className='text-primary'>Profile<hr /></h2>
                    </Card.Body>
                    <div className='right' style={{marginLeft:"10pxsw3fd"}} >
                    <h4>Profile Detail</h4>
                    <h5><MailIcon /> varshilgadhiya5784@gmail.com</h5>
                    <h5><PhoneIcon /> 9998650444</h5>
                    </div>
                    <button
                        onChange={(e) => (e.target.value)}
                        type="Edit Profile"
                        className='btn btn-primary w-50 my-5'
                        variant="contained"
                        sx={{ mt: 1, mb: 1 }}
                        style={{ marginLeft: "60px" }}
                    >

                        <EditIcon /> Edit Profile
                    </button>

                </Card></div></div>
    )
}

export default Profile