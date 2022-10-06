import { useState } from 'react'
import './App.css'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { Routes, Route, useNavigate } from 'react-router-dom'
import data from './data.js'
import Products from './components/Products'
import Detail from './components/Detail'
import Cart from './components/Cart'

function App() {
  let [bears, setBears] = useState(data)
  let navigate = useNavigate()

  return (
    <div className="App">
      <Navbar
        bg="light"
        variant="light">
        <Container>
          <Navbar.Brand onClick={() => navigate('/')}>BearShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/cart')}>장바구니</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <Products
                bears={bears}
                setBears={setBears}
                navigate={navigate}
              />
            </>
          }
        />

        <Route
          path="/detail/:id"
          element={<Detail bears={bears} />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="*"
          element={<div>페이지를 찾을수 없습니다.</div>}
        />
      </Routes>
    </div>
  )
}

export default App
