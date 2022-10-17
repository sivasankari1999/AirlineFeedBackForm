import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
export default class NavComp extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>
                            Give a FeedBack / File a complaint
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </>
        )
    }
}
