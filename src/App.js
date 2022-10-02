import { useState } from 'react';
import { Row, Col, Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import data from './data.js';

function App() {
  let [bears] = useState(data);

  return (
    <div className="App">
      <Navbar
        bg="light"
        variant="light">
        <Container>
          <Navbar.Brand href="#home">BearShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <ProductComponent bears={bears} />
    </div>
  );
}

function ProductComponent(props) {
  return (
    <Container>
      <Row>
        {props.bears.map((a, i) => (
          <Col
            sm
            key={i}>
            <img
              src={process.env.PUBLIC_URL + `/img/bear${i + 1}.jpg`}
              width="80%"
              alt=""
            />
            <h4>{props.bears[i].title}</h4>
            <p>{props.bears[i].price}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
