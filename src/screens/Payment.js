import React, {useState, useEffect} from 'react'
import {Container, Row, Col} from 'react-grid-system'
import {Form, Button} from 'react-bootstrap'
import Locatenav from '../components/Locatenav'
import BottomBar from '../components/BottomBar'
import { Link , useLocation, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {saveShippingAddress} from '../actions/cartAction'
import "../my.css"; 

function Payment() {

    
  const navigate = useNavigate()
  const location = useLocation()
 
  const cart = useSelector(state => state.cart)
  const {shippingAddress} = cart

  const dispatch = useDispatch()
  
  const [name, setName] = useState(shippingAddress.name)
  const [city, setCity] = useState(shippingAddress.city)
  const [address, setAddress] = useState(shippingAddress.address)
  const [number, setNumber] = useState(shippingAddress.number)
   

  const submitHandler = (e) => {
      e.preventDefault()
      dispatch(saveShippingAddress({name, city, address, number}))
      navigate('/final')
    }
  return (
    <div style={{backgroundColor : '#F5EBE0'}}  className='fontt'>
      <Locatenav/>
    <Container style={{backgroundColor : '#F5EBE0'}}>
        <Container fluid style={{textAlign  : 'center', marginBottom : '40px'}}>
           <Row>
            <Col style={{
                fontSize : '30px'
            }}>
               checkout
            </Col>
           </Row>
        </Container>
        <Container fluid style={{textAlign : 'center'}}>
            <Row>
                <Col>
                <Link to="/payment">
                <Button 
                style={{borderRadius : '4px', fontSize : '16px', width : '250px', backgroundColor : '#000000' , color : 'white', borderColor : '#000000', fontWeight : 'bold', fontSize : '18px'}} 
                class='btn btn-sm'>credit card</Button></Link>
                <Link to="/delivery">
                <Button 
                style={{borderRadius : '4px', fontSize : '16px', width : '250px' , color : 'black' , backgroundColor : '#C1DAD6', borderColor : '#C1DAD6', fontWeight : 'bold', fontSize : '18px' }} 
                class='btn btn-sm'>on delivery</Button></Link>
                </Col>
            </Row>
        </Container>
      <Row>
        <Col>
          <p style={{marginTop : '60px', fontStyle : 'italic', fontWeight : 'bold', fontSize : '22px'}}>Shipping Details</p>
          <img style={{maxWidth : '100%', height : 'auto'}} src="/images/card.jpg"/>
        </Col>
        <Col style={{textAlign : 'center', margin : '200px auto'}}>
        <Container style={{backgroundColor : '#33292A', borderRadius : '4px', margin : 'auto', width : '68%', height : '450px', paddingTop : '10px'}}>
            <Form onSubmit={submitHandler}>

      <Form.Group 
      controlId='address'
      style={{
            marginBottom : '5px',
            display : 'inline-flex',
            marginTop : '10px'
        }}>
        <i style={{
            color: '#fcfcfc',
            marginRight : '2px'
        }} class="fa-solid fa-home"></i>
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
        }} type="text"
        required
        value={address ? address : ''}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Address" />
       
      </Form.Group>
      <hr  style={{
                  height: "1px",
                  borderWidth: "0",
                  color: "white",
                  backgroundColor: "white",
                  marginTop: "15px",
                }}></hr>
      
      <Form.Group 
      controlId='name'
      style={{
            marginBottom : '5px',
            display : 'inline-flex'
        }}>
        <i style={{
            color: '#fcfcfc',
            marginRight : '2px'
        }} class="fa-solid fa-user"></i>
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
        }} type="text"
        required
        value={name ? name : ''}
        onChange={(e) => setName(e.target.value)}
        placeholder="Holder Name" />
       
      </Form.Group>

      <hr  style={{
                  height: "1px",
                  borderWidth: "0",
                  color: "white",
                  backgroundColor: "white",
                  marginTop: "15px",
                }}></hr>
      <Form.Group 
      controlId='city'
      style={{
            marginBottom : '5px',
            display : 'inline-flex'
        }}>
        <i style={{
            color: '#fcfcfc',
            marginRight : '2px'
        }} class="fa-solid fa-city"></i>
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
        }} type="text" 
        required
        value={city ? city : ''}
        onChange={(e) =>setCity(e.target.value)}
        placeholder="City" />
          
      </Form.Group>
      <hr  style={{
                  height: "1px",
                  borderWidth: "0",
                  color: "white",
                  backgroundColor: "white",
                  marginTop: "15px",
                }}></hr>
      <Form.Group 
      controlId='number'
      style={{
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
        }} type="text" 
        required
        value={number ? number : ''}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Phone Number" />
         
      </Form.Group>
      <hr  style={{
                  height: "1px",
                  borderWidth: "0",
                  color: "white",
                  backgroundColor: "white",
                  marginTop: "15px",
                }}></hr>
      <Button 
      type='submit'
      className='btn btn-block buttons' style={{
        marginTop : '20px',
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

export default Payment
