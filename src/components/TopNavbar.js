 import Container from 'react-bootstrap/Container';
 import Nav from 'react-bootstrap/Nav';
 import Navbar from 'react-bootstrap/Navbar';
 import NavDropdown from 'react-bootstrap/NavDropdown';
 import edyoda from "../assets/Images/EDYODA.png";
 import search from "../assets/Images/Search Icon.png";
 import button from "../assets/Images/Primary Button.png";
 
 function TopNavbar() {
  return (
    <Navbar bg="light" expand="lg" className='navbar'>
      <Container>
        <Navbar.Brand href="#home"><img src={edyoda} alt="edImg" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Courses" id="basic-nav-dropdown" className='courses'>
            </NavDropdown>
            <NavDropdown title="Programs" id="basic-nav-dropdown" className='programs'>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <img src={search} alt="srImg" style={{width:'24px', height:'24px'}}/>
        {/* <Nav.Link href="#LogIn">Log in</Nav.Link> */}
         <p className='logIn'>Log in</p>
         <img src={button} alt="btnImg" className='nav-btn'/>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;