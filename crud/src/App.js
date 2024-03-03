import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import RouterComponent from "./RouterComponent";

// For Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App(){
    return(
        <Container fluid="md">
            <Row>
                <Col lg={12} md={12} xs={12}>
                    <Header />
                    <RouterComponent />
                    <Footer />
                </Col>
            </Row>
        </Container>
    );
}

export default App;