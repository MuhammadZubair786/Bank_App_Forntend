import { Paper, Typography } from "@mui/material";
import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import Button from '@mui/material/Button';
import Form from 'react-bootstrap/Form';
import TextField from '@mui/material/TextField';
import Select from "@mui/material/Select";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

function Profile() {
    return (
        <Container>
            <Row>
                <Col lg={2}>
                </Col>
                <Col lg={8}>
                    <Paper elevation={16} >
                        <Typography>
                            <h1 style={{ color: "black", fontFamily: 'Faster', fontWeight: "bold", paddingTop: "10px", paddingLeft: "40px", textAlign: "center" }}>Profile Update</h1>
                            <Table striped hover size="lg" style={{ margin: "10px", width: "90%" }}>
                                <tr>
                                    <td style={{ textAlign: "center" }}>Customer Id</td>
                                    <td>
                                        <Form.Group className="mb-3" controlId="formBasicEmail" style={{ paddingTop: "", margin: "auto", width: "60%" }}>

                                            <TextField id="outlined-basic" size="small" placeholder="121233" variant="outlined" className='form-control' InputProps={{
                                                readOnly: true,
                                            }} />

                                        </Form.Group>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: "center" }}>Full Name</td>
                                    <td>
                                        <Form.Group className="mb-3" controlId="formBasicEmail" style={{ paddingTop: "", margin: "auto", width: "60%" }}>

                                            <TextField id="outlined-basic" size="small" label="Full Name" variant="outlined" className='form-control' />

                                        </Form.Group>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: "center" }}>Phone No</td>
                                    <td>
                                        <Form.Group className="mb-3" controlId="formBasicEmail" style={{ paddingTop: "", margin: "auto", width: "60%" }}>

                                            <TextField id="outlined-basic" size="small" placeholder="Phone No" variant="outlined" className='form-control' />

                                        </Form.Group>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: "center" }}>Address</td>
                                    <td>
                                        <Form.Group className="mb-3" controlId="formBasicEmail" style={{ paddingTop: "", margin: "auto", width: "60%" }}>

                                            <TextField id="outlined-basic" size="small" placeholder="Address" variant="outlined" className='form-control' />

                                        </Form.Group>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: "center" }}>Address</td>
                                    <td>
                                        <Form.Group >
                                            <Box sx={{ minWidth: 120, textAlign: "center" }}>
                                                <FormControl style={{ width: "60%", textAlign: "center" }}>
                                                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        // value={Question}
                                                        label="Age"
                                                        size="small"
                                                    // onChange={handleChange}
                                                    >
                                                        <MenuItem value={10}>Name Of Primary School</MenuItem>
                                                        <MenuItem value={20}>Name Of Best Friend Name</MenuItem>
                                                        <MenuItem value={30}>Name of Born Location</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </Form.Group>                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: "center" }}>Enter Answer</td>
                                    <td>
                                        <br />
                                        <Form.Group className="mb-3" controlId="formBasicEmail" style={{ paddingTop: "", margin: "auto", width: "60%" }}>

                                            <TextField id="outlined-basic" size="small" placeholder="Answer" variant="outlined" className='form-control' />

                                        </Form.Group>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        <div style={{ textAlign: "right", marginRight: "10px" }}>

                                            <Button variant="contained" style={{
                                                borderRadius: 10,
                                                backgroundColor: "red",
                                                padding: "5px 5px",
                                                fontSize: "16px"
                                            }}>
                                                &emsp;&emsp; Update&emsp;&emsp;
                                            </Button>
                                        </div>
                                    </td>
                                </tr>

                            </Table>
                            <br />

                        </Typography>
                    </Paper>
                </Col>
                <Col lg={2}>
                </Col>
            </Row>
        </Container>
    )
}

export default Profile