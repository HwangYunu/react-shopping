import { Row, Col, Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar
        bg="light"
        variant="light">
        <Container>
          <Navbar.Brand href="#home">BBshop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <Container>
        <Row>
          <Col sm>
            <img
              src="http://m.imaxtore.com/web/product/extra/big/201808/697aa961184b01ef6cab13246c9e4c06.jpg"
              width="80%"
              alt=""
            />
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>

          <Col sm>
            <img
              src="http://m.imaxtore.com/web/product/extra/big/201808/360d07d224bbedefd49a1277a998de66.jpg"
              width="80%"
              alt=""
            />
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col sm>
            <img
              src="http://m.imaxtore.com/web/product/extra/big/201808/ae8e01ed60c4794403548f89bb1f0039.jpg"
              width="80%"
              alt=""
            />
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
