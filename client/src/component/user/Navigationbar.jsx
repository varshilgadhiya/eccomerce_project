import { fontSize } from '@mui/system'
import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const navigationbar = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">E-commercesite</Navbar.Brand>
                    <Nav className="me-auto" style={{ marginLeft: "750px", fontSize: "20px" }}>
                        <Nav.Link href="" className='text-dark'>home</Nav.Link>
                        <Nav.Link href="" className='text-dark'>dashboard</Nav.Link>
                        <Nav.Link href="" className='text-dark'>logout</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default navigationbar