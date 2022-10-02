import { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './App.css';
import data from './data.js';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  let [bears] = useState(data);

  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">BearShop</Link>
        </li>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/detail">상세페이지</Link>
        </li>
      </ul>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <ProductComponent bears={bears} />
            </>
          }
        />
        <Route
          path="/detail"
          element={<div>상세페이지임</div>}
        />
      </Routes>
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
