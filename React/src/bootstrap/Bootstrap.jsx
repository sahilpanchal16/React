
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Bootstraptemplet() {
    return (
        <>
            <header>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">SP</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <main>
                <Container>
                    <br />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit adipisci obcaecati aut, excepturi alias soluta beatae quasi corrupti repellendus explicabo optio repellat maxime vero sed, necessitatibus doloremque vel dicta ipsum!</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae blanditiis esse quibusdam molestias, qui id ipsum, accusantium, odit numquam eius magni doloremque illo odio minima necessitatibus nulla ea? Fugit, facilis!</p>
                    <br></br>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error quasi doloremque provident veritatis beatae? Impedit fugit consectetur quas ad aliquid obcaecati magni, nemo id, repellat tempora dolorem delectus ducimus vel?</p>
                    <br />
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vero sapiente fugit fugiat tenetur! Maiores, necessitatibus esse aspernatur deleniti sequi magni! Beatae eaque porro nostrum natus a. Sunt, consequuntur aut!</p>

                </Container>
            </main>
            <br />
            <br />
            <br /><br />
            <footer className="page-footer font-small blue pt-4 bg-dark text-white">
                <div className="container-fluid text-center text-md-left">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 mt-md-0 mt-3">
                                <h5 className="text-uppercase">SP</h5>
                                <li style={{ listStyle: "none" }}>Email:-sahilapcnahl@gmail.com</li>
                                <li style={{ listStyle: "none" }}>Phone:-0803333333</li>
                            </div>

                            <hr className="clearfix w-100 d-md-none pb-0" />

                            <div className="col-md-3 mb-md-0 mb-3">
                                <h5 className="text-uppercase">Inside Grace Eleyae</h5>
                                <ul className="list-unstyled">
                                    <li><a href="#!">Home</a></li>
                                    <li><a href="#!">Feautures</a></li>
                                    <li><a href="#!">Pricing</a></li>
                                    <li><a href="#!">FAQS</a></li>
                                </ul>
                            </div> 

                         <div className="col-md-3 mb-md-0 mb-3">
                                <h5 className="text-uppercase">Customer Care</h5>
                                <ul className="list-unstyled">
                                    <li><a href="#!">Shiping and Handling</a></li>
                                    <li><a href="#!">Tearms And Condition</a></li>
                                    <li><a href="#!">Why Satin</a></li>
                                    <li><a href="#!">My Cart</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="footer-copyright text-center py-3">© 2024 Copyright-All rights reserved Sahil Panchal</div>

            </footer>

        </>
    )
}