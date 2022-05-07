import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Banner from './Banner';
import MovieSection from './MovieSection';
import SweetAlert from 'react-bootstrap-sweetalert';
import Swal from 'sweetalert2';
function MainScreen() {


    return (
        <Container fluid>
           
                <Banner />
                <MovieSection/>
         
        </Container>

    )
}

export default MainScreen
