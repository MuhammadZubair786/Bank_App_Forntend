
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Paper from '@mui/material/Paper';
import { Radio, Typography } from "@mui/material";
import Switch from '@mui/material/Switch';
import Button from "@mui/material/Button";
import Form from 'react-bootstrap/Form';
import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify';
import AddAccount from "../../Store/action/AddAccount";
import { connect } from "react-redux";

import AddBeneficiary from '../../Store/action/AddBeneficiary'

function AddBeneficiary_Func(props) {
    const label = { inputProps: { 'aria-label': 'Color switch demo' } };

    const [topping, setTopping] = useState()
    let [accountno, setaccountno] = useState()
    let [confaccountno, setconfaccountno] = useState()


    const onOptionChange = e => {
        setTopping(e.target.value)
    }

    const submitdata = () => {
        if(accountno==undefined || accountno==""){
            toast.error("Enter Account Number", {
                position: "bottom-center",

            })
        }
       else  if(confaccountno==undefined || confaccountno==""){
            toast.error("Enter Confirm  Account Number", {
                position: "bottom-center",

            })
        }
        else  if (topping == undefined) {
            toast.error("Must Select Account Type", {
                position: "bottom-center",

            })
        }
        else if(accountno !=confaccountno){
            
            toast.error("Account No &   Confirm Account Not Matched", {
                position: "bottom-center",

            })
        }
        else{
            console.log(props)
            let user = localStorage.getItem("Login_User")

            let date = new Date()
         
            props.AddBeneficiary({
               accountno: accountno,
                type: topping,
                chk : JSON.parse(user),
                status: false,
                Date: date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear(),
            })
            
            toast.success("Succefully Added Benefiers", {
                position: "bottom-center",

            })
            
            // props.AddBeneficiary("check")
        }
    
    }



return (
    <Container>
        <Row className="mt-5">
            <Col lg={3}></Col>
            <Col lg={7}>
                <Paper elevation={16}>
                    <Typography>
                        <h1 style={{ color: "black", fontFamily: 'Faster', paddingTop: "10px", fontWeight: "bold", textAlign: "center" }}>Add Beneficiary</h1>

                        <Form.Group className="mb-3" controlId="formBasicEmail" style={{ margin: "auto", width: "60%" }}>

                            <TextField id="outlined-basic" onChange={(e) => setaccountno(e.target.value)} value={accountno} label="Enter Account Number" variant="outlined" className='form-control' />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail" style={{ margin: "auto", width: "60%" }}>

                            <TextField id="outlined-basic" onChange={(e) => setconfaccountno(e.target.value)} value={confaccountno} label="Confirm Account" variant="outlined" className='form-control' />

                        </Form.Group>
                        <h4 style={{ color: "black", textAlign: "center" }}>Select Type Of Account</h4>
                        <div style={{ border: "1px solid grey ", width: "50%", margin: "auto" }}>
                            <h4 style={{ marginTop: "10px" }}>
                                <input type="radio" name="type" onChange={onOptionChange} id="" style={{ marginLeft: "20px" }} value={"Saving Bank"} />&emsp;Saving Bank

                            </h4>
                            <h4 style={{ marginTop: "10px" }}>

                                <input type="radio" name="type" onChange={onOptionChange} id="" style={{ marginLeft: "20px" }} value={"Current Account"} />&emsp;Current Account
                            </h4>

                        </div>
                        <br />
                        <div style={{ textAlign: "right", marginRight: "50px" }}>
                        <ToastContainer autoClose={1000}
                                    hideProgressBar={false}
                                    theme="dark"
                                />
                            <Button variant="contained" color="success"  onClick={()=>submitdata()}>
                                Submit
                            </Button>
                        </div>

                        <br />
                        <br /> <br />


                    </Typography>
                </Paper>

            </Col>
            <Col lg={2}></Col>
        </Row>

    </Container>
)
}


const mapStateToProps = (state) => ({
    user: state.user,
    count: state.count
})


const mapDispatchToProps = (dispatch) => ({
    AddBeneficiary: (data) => dispatch(AddBeneficiary(data)),


})


export default connect(mapStateToProps, mapDispatchToProps)(AddBeneficiary_Func);