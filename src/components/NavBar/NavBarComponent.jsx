import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';
import{ Link } from "react-router-dom"
import { useEffect, useState } from 'react';
import axios from 'axios';



const NavBarComponent = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
   axios
   .get("https://dummyjson.com/products/categories")
   .then((res) => setCategories(res.data)).catch((error) => console.log(error));
  }, []);

  console.log(categories);


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand><Link to={"/"} style={{textDecoration: "none", color: "black"}}>Mercado Live</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
        
            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              
                {categories.map((category,index) => {
                  return(
                    <NavDropdown.Item key={index}> <Link to={`/category/${category}`} style={{textDecoration: "none", color: "black"}}>{category}</Link></NavDropdown.Item>
                  );
                })}
              
            
              
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          <Form className="d-flex">
          <CartWidgetComponent />
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
            
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;