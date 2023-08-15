import React from 'react';
import { Navbar, Nav, Container, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    return (
      <>
      <div className="app">
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="/home">Mon React bootstrap-App 1</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/home">Accueil</Nav.Link>
                  <Nav.Link href="/link">Lien</Nav.Link>
                  <Nav.Link href="/search">recherche</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
  
          <Container>
            
            <Row>
              <Col>
                <Card>
                  <Card.Img variant="top" src="image1.jpg" />
                  <Card.Body>
                    <Card.Title>Carte 1</Card.Title>
                    <Card.Text>Description de la carte 1.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img variant="top" src="image2.jpg" />
                  <Card.Body>
                    <Card.Title>Carte 2</Card.Title>
                    <Card.Text>Description de la carte 2.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img variant="top" src="image3.jpg" />
                  <Card.Body>
                    <Card.Title>Carte 3</Card.Title>
                    <Card.Text>Description de la carte 3.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
}

export default App;
