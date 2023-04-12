import { Paper, Typography } from '@mui/material';
import { Container, Col, Row } from 'react-bootstrap';
import { BsBank2 } from "react-icons/bs";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Logo from '../assets/img.png'
import TextField from '@mui/material/TextField';
import "./Login.css"
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div style={{ backgroundColor: "white" }}>
            <Container fluid style={{ backgroundColor: "#01065D", boxShadow: "10px 10px 100px white" }}>
                <Row>
                    <Col lg={6} >
                        <BsBank2 size="30" color='white' style={{ marginTop: "10px", marginBottom: "8px" }} />
                    </Col>
                    <Col lg={6} style={{ textAlign: "right", marginTop: "12px", marginBottom: "12px" }}>
                        <h5 style={{ color: "white", fontFamily: 'Lobster', }}>Staff Corner</h5>
                    </Col>
                </Row>
            </Container>
            <Container style={{ margin: "2%" }}   >
                <Row>
                    <Col lg={7}>
                        <img src={Logo} style={{ width: "80%", textAlign: "center", margin: "auto", display: "block" }} />
                    </Col>
                    <Col lg={5} style={{ border: "1px solid #020431", borderRadius: "10%", padding: "2%", marginTop: "50" }}>

                        <Form style={{ height: "20" }}>
                            <br />
                            <h3 style={{ color: "#01065D", textAlign: "center", fontFamily: "DynaPuff", textShadow: "10px 10px 100px blue" }}>Login</h3>
                            <br />
                            <Form.Group className="mb-3" controlId="formBasicEmail">

                                <TextField id="outlined-basic" label="Email" variant="outlined" className='form-control' />

                            </Form.Group>
                            <br />
                            <Form.Group className="mb-3" controlId="formBasicPassword">

                                <TextField id="outlined-basic" label="Password" variant="outlined" className='form-control' />
                            </Form.Group>
                            <br />
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember me" style={{ color: "#01065D" }} />
                            </Form.Group>
                            <br />
                            <Button style={{ backgroundColor: "#040B87", height: "50px" }} type="submit" className='form-control'>
                                Login
                            </Button>

                            <br />  <br />
                            <Row>
                                <Col lg={6}>
                                    <h5 style={{ color: "black", textAlign: "left", fontSize: "13px", fontFamily: "DynaPuff", textShadow: "10px 10px 100px blue" }}>
                                    <Link to={"/forgotPassword"}>
                                        Forgot Password
                                        </Link></h5>

                                </Col>
                                <Col lg={6}>
                                    <h5 style={{ color: "black", textAlign: "right", fontSize: "13px", fontFamily: "DynaPuff", textShadow: "10px 10px 100px blue" }}>
                                        <Link to={"/regsister"}>
                                            Create Account
                                        </Link>
                                    </h5>

                                </Col>
                            </Row>



                        </Form>


                    </Col>
                    <Col lg={2}></Col>

                </Row>


            </Container>
            <Container className='footer' fluid style={{ backgroundColor: "#01065D", boxShadow: "10px 10px 100px grey" }}>
                <Row>

                    <Col lg={12} style={{ textAlign: "center", }}>
                        <h5 style={{ color: "white", fontFamily: 'Lobster', }}>All right resereved@2023</h5>
                    </Col>
                </Row>
            </Container>

        </div>

    )
}

export default Login