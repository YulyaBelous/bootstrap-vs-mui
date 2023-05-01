import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Form, NavDropdown} from "react-bootstrap";
import {Plus, PencilFill, CardList, FiletypePdf, PersonCircle, PersonFillLock, HouseFill, Trash3Fill, FileTextFill} from "react-bootstrap-icons";


const PageWithBootstrap = () => {

return(
    <>
        {/*<Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>*/}
        <Navbar bg="primary" variant="dark">
            <Container fluid>
                <Navbar.Brand className="ms-4" href="#home"> <FileTextFill size={30}/> Invoice</Navbar.Brand>
                <Nav className="me-4">
                    <Nav.Link href="#"><HouseFill/> Home</Nav.Link>
                    <Nav.Link href="#"> <CardList/> Entities</Nav.Link>
                    <Nav.Link href="#"> <PersonFillLock/> Administration</Nav.Link>
                    <Nav.Link href="#"> <PersonCircle/> Account</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
            <Button className="mt-3 mb-3 ms-3 me-3 float-sm-end" variant="primary"> <Plus size={29}/> New invoice</Button>
        <Container fluid>
            <Table striped bordered hover >
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Number</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                    <th>Supplier</th>
                    <th>Customer</th>
                    <th  width='155px'></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>456521</td>
                    <td>12.04.2023</td>
                    <td>Generating invoice</td>
                    <td>100</td>
                    <td>10</td>
                    <td>1000</td>
                    <td>Shevchenko T. G.</td>
                    <td>Altronica Systems OÜ</td>
                    <td> <Button variant="primary"><PencilFill/></Button> <Button variant="secondary"><FiletypePdf/></Button> <Button variant="danger"><Trash3Fill/></Button></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>203245</td>
                    <td>05.05.2023</td>
                    <td>Web page creation</td>
                    <td>200</td>
                    <td>10</td>
                    <td>2000</td>
                    <td>Lesya Ukrainka</td>
                    <td>Altronica Systems OÜ</td>
                    <td> <Button variant="primary"><PencilFill/></Button> <Button variant="secondary"><FiletypePdf/></Button> <Button variant="danger"><Trash3Fill/></Button></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>809546</td>
                    <td>26.01.2023</td>
                    <td>Pet the cat</td>
                    <td>500</td>
                    <td>10</td>
                    <td>5000</td>
                    <td>Omar Khayyam</td>
                    <td>Altronica Systems OÜ</td>
                    <td> <Button variant="primary"><PencilFill/></Button> <Button variant="secondary"><FiletypePdf/></Button> <Button variant="danger"><Trash3Fill/></Button></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>102222</td>
                    <td>24.04.2023</td>
                    <td>Testing invoice</td>
                    <td>100</td>
                    <td>5</td>
                    <td>500</td>
                    <td>Shevchenko T. G.</td>
                    <td>Altronica Systems OÜ</td>
                    <td> <Button variant="primary"><PencilFill/></Button> <Button variant="secondary"><FiletypePdf/></Button> <Button variant="danger"><Trash3Fill/></Button></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>099999</td>
                    <td>30.03.2023</td>
                    <td>Create page with bootstrap and mui</td>
                    <td>100</td>
                    <td>10</td>
                    <td>1000</td>
                    <td>Raffaello Giovagnoli</td>
                    <td>Altronica Systems OÜ</td>
                    <td> <Button variant="primary"><PencilFill/></Button> <Button variant="secondary"><FiletypePdf/></Button> <Button variant="danger"><Trash3Fill/></Button></td>
                </tr>
                </tbody>
            </Table>
        </Container>

    </>
);

}

export default PageWithBootstrap;