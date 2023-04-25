import { Paper, Typography } from '@mui/material';
import { Container, Col, Row, Table } from 'react-bootstrap';
import { BsBank2 } from "react-icons/bs";
import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';
import Logo from '../../assets/img.png'
import TextField from '@mui/material/TextField';
import "../Login.css"
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useEffect, useState } from 'react';
// import Table from '@mui/material/Table';
import { connect } from 'react-redux';
import Approve_Benefiers from '../../Store/action/Approve_Benficiary'
import { ToastContainer, toast } from 'react-toastify';
import Enabled_Disabled_Customer from '../../Store/action/EDisableCus';
import {TiLockOpen} from 'react-icons/ti'
import {AiOutlineLock} from 'react-icons/ai'
import Enabled_Disabled_Staff from '../../Store/action/EDisableStaff';

function ViewStaff(props) {

   let [beneficiary,setbeneficiary]=useState([])

    useEffect(()=>{
        accounttransaction()
    },[])



    const approve_ben=(data)=>{
        console.log(data)
        props.Enabled_Disabled_Staff(data)

        setTimeout(()=>{
            toast.success("Successfully Change State", {
                position: "bottom-center",

            })
            accounttransaction()
           
        },2000)
    }
  

    const accounttransaction = () => {
        let user = JSON.parse(localStorage.getItem("staff"))
        console.log(user)
        if(user!=undefined){
            let appbeneficiary = []
            for (var i = 0; i < user.length; i++) {
              appbeneficiary.push(user[i])
           
            }
    
            setbeneficiary(appbeneficiary)
        }
      

    }
  
    return (
        <>
         <Container fluid style={{ backgroundColor: "#01065D", boxShadow: "10px 10px 100px white" }} >
                <Row>
                    <Col lg={6} >
                        <BsBank2 size="30" color='white' style={{ marginTop: "10px", marginBottom: "8px" }} />

                    </Col>

                    <Col lg={6} style={{ textAlign: "right", marginTop: "12px", marginBottom: "12px" }}>
                        <h5 style={{ color: "white", fontFamily: 'Lobster', }}>Super Admin</h5>
                    </Col>
                </Row>

            </Container>
            <Container className='mt-3'>
                <Row>
                    <Col lg={12} className='text-center'>

                        <Link to="/Admin_Dashboard">
                        <Button variant="outlined" style={{ marginLeft: "10px", width: "22%", margin: "1%" }} >Create Staff</Button>
                        </Link>
                        <Link to="/View_Staff">
                        <Button variant="contained" style={{ marginLeft: "10px", width: "22%", margin: "1%", backgroundColor: "#01065D" }} >View Staff</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
           
            <Container className='mt-3'>
                <Row>
                    <Col lg={12}>
                        {/* <h5 style={{textAlign:"center",border:"1px solid black",margin:"16px",color: "black", fontFamily: 'Faster', fontWeight: "bold", paddingLeft: "40px", }}>Account Details</h5> */}
                        <Table bordered hover size="lg" style={{ margin: "20px", width: "90%", textAlign: "center" }}>
                            <thead>
                                <tr>
                                    <th colSpan={6} style={{ fontSize: "28px" }}>Enable - Disabled Staff</th>
                                </tr>
                                <tr>
                                    <th>S.NO</th>
                                    <th>Customer Name</th>
                                    <th>Customer Email</th>
                                  
                                    <th>Approve</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    beneficiary.map((v,i)=>{
                                        return(
                                            <tr>
                                            <td>{i+1}</td>
                                            <td>{v.name}</td>
                                            <td>{v.email}</td>
                                         
                                            <td>
                                            <Button   onClick={()=>approve_ben(v)}>
                                           {
                                            v.status == true ?

                                            <TiLockOpen size={30} color='green'/>
                                            :
                                           <AiOutlineLock  size={30} color='red'/>
                                           }
                                            {/* Approve */}
                                                </Button>
                                            </td>
                                        </tr>
                                        )
                                    })
                                }
                              
                             
                               

                            </tbody>
                        </Table>

                        <ToastContainer autoClose={1000}
                                            hideProgressBar={false}
                                            theme="dark"
                                        />
                      
                        <br />
                    </Col>
                </Row>

            </Container>
        </>
    )
}
const mapStateToProps = (state) => ({
    user: state.user,
    count: state.count
})


const mapDispatchToProps = (dispatch) => ({
    Enabled_Disabled_Staff: (data) => dispatch(Enabled_Disabled_Staff(data)),


})


export default connect(mapStateToProps, mapDispatchToProps)(ViewStaff);