import React from 'react'
import {Container, Row, Col} from 'react-grid-system'
import {Button, Form} from 'react-bootstrap'
import Locatenav from '../components/Locatenav'
import BottomBar from '../components/BottomBar'
import { Link } from 'react-router-dom'
function Delivery() {
  return (
    <div  className='fontt'>
          <Locatenav/>
    <Container>
  
         <Container fluid style={{textAlign  : 'center', marginBottom : '40px'}}>
           <Row>
            <Col style={{
                fontSize : '30px'
            }}>
               payment
            </Col>
           </Row>
        </Container>
        <Container fluid style={{textAlign : 'center'}}>
            <Row>
                <Col>
                <Link to="/payment">
                <Button 
                style={{borderRadius : '4px', fontSize : '16px', width : '250px', backgroundColor : '#C1DAD6' , color : 'black', borderColor : '#C1DAD6', fontWeight : 'bold', fontSize : '18px'}} 
                class='btn btn-sm'>credit card</Button></Link>
                <Link to="/delivery">
                <Button 
                style={{borderRadius : '4px', fontSize : '16px', width : '250px' , color : 'white' , backgroundColor : '#000000', borderColor : '#000000', fontWeight : 'bold', fontSize : '18px' }} 
                class='btn btn-sm'>on delivery</Button></Link>
                </Col>
            </Row>
        </Container>
        <Row>
        <Col>
          <p style={{marginTop : '60px',  fontStyle : 'italic', fontWeight : 'bold', fontSize : '22px'}}>On Delivery details</p>
          <img src="/images/deliver.jpg" style={{maxWidth : '100%', height : 'auto'}}  />
        </Col>
        <Col style={{textAlign : 'center', margin : '200px auto'}}>
        <Container style={{backgroundColor : '#33292A', borderRadius : '4px', margin : 'auto', width : '68%', height : '370px', paddingTop : '10px'}}>
            <Form style={{paddingTop  : '10px'}}>
        <Form.Group style={{
            marginBottom : '5px',
            display : 'inline-flex'
        }}>
        <i style={{
            color: '#ffffff',
            marginRight : '2px'
        }} class="fa-solid fa-credit-card" ></i>
        <Form.Control style={{
            background : 'none',
            borderRadius : 'none',
            border : 'none',
            color : 'none',
            margin : 'none',
            width : '300px',
            height : '20px',
            fontSize : '15px',
            fontWeight : 'bold',
            color : 'white',
        }} type="text" placeholder="Name" />

      </Form.Group>
      <hr  style={{
                  height: "1px",
                  borderWidth: "0",
                  color: "white",
                  backgroundColor: "white",
                  marginTop: "10px",
                }}></hr>

      <Form.Group style={{
            marginBottom : '5px',
            display : 'inline-flex'
        }}>
        <i style={{
            color: '#fcfcfc',
            marginRight : '2px'
        }} class="fa-solid fa-address-card"></i>
        <Form.Control style={{
            background : 'none',
            borderRadius : 'none',
            border : 'none',
            color : 'none',
            margin : 'none',
            width : '300px',
            height : '20px',
            fontSize : '15px',
            fontWeight : 'bold',
            color : 'white',
        }} type="text" placeholder="Billing Address" />
         
      </Form.Group>
      <hr  style={{
                  height: "1px",
                  borderWidth: "0",
                  color: "white",
                  backgroundColor: "white",
                  marginTop: "15px",
                }}></hr>

      <Form.Group style={{
            marginBottom : '5px',
            display : 'inline-flex'
        }}>
        <i style={{
            color: '#fafafa',
            marginRight : '2px'
        }} class="fa-solid fa-phone"></i>
        <Form.Control style={{
            background : 'none',
            borderRadius : 'none',
            border : 'none',
            margin : 'none',
            width : '300px',
            height : '20px',
            fontSize : '15px',
            fontWeight : 'bold',
            color : 'white',
        }} type="text" placeholder="Phone Number" />
       
      </Form.Group>
      <hr  style={{
                  height: "1px",
                  borderWidth: "0",
                  color: "white",
                  backgroundColor: "white",
                  marginTop: "15px",
                }}></hr>
      <Button className='btn-block buttons' style={{
        marginTop: '20px',
        width : '100%',
        height : '50px',
        fontWeight : 'bold',
        backgroundColor: "#F5EBE0",
        color : 'black',
        borderColor: "black",

      }}>
        Confirm
      </Button>
    </Form>
            </Container>
        
        </Col>
      </Row>
    </Container>
    <BottomBar/>
    </div>
  )
}

export default Delivery
