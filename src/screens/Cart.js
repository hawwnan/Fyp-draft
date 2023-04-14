import React, { useEffect } from 'react' 
import {Container, Row, Col} from 'react-grid-system'
import {Button, ListGroup, Image, Form, Card, ListGroupItem} from 'react-bootstrap'
import Locatenav from '../components/Locatenav'
import BottomBar from '../components/BottomBar'
import { Link, useParams, useLocation ,useNavigate } from 'react-router-dom'
import Message from '../components/Message'
import {addToCart, removeFromCart} from '../actions/cartAction'
import {useDispatch, useSelector} from 'react-redux'

function Cart() { 

   const {id} = useParams()
   const location = useLocation()
   const navigate = useNavigate()
   const qty = location.search ? Number(location.search.split('=')[1]) : 1
   
   
   const dispatch = useDispatch()
   const cart = useSelector(state => state.cart)
   const userLogin = useSelector(state => state.userLogin)

   const {error, loading, userInfo} = userLogin
   const {cartItems} = cart
   console.log('cartItems : ' , cartItems)

   useEffect(() => {
    //depends on id
        if(id){
            dispatch(addToCart(id, qty))
        }
   }, [dispatch,id, qty])

   const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    
   }

   const checkoutHandler = () => {
      if(userInfo)
        navigate('/payment')
      else{
        navigate(`/login?redirect=${'payment'}`)
      }
   }

  return (
    <div  className='fontt'>
        <Locatenav/>
    <Container style={{ height : '850px', width : '100%'}}>
        <Container fluid style={{textAlign  : 'center', marginBottom : '60px'}}>
            {/* <Row>
                <Col style={{
                fontFamily : 'monospace',
                fontSize : '30px',
            }}>
                    cart
                </Col>
            </Row> */}
            <Row>
                <Col md={8}>
                    <h1 style={{
                        fontSize : '1.8rem',
                        padding : '1rem 0'
                    }}>shopping cart</h1>
                    {cartItems.length === 0 ? (
                        <Message variant='info'>
                            Your Cart is Emplty <Link to='/'>Go Back
                            </Link>
                        </Message>
                    ) : (
                        <ListGroup variant='flush'>
                            {cartItems.map(item => (
                                <ListGroup.Item key={item.product}>
                                    <Row>
                                        <Col md={2}>
                                            <Image src={item.image} fluid rounded/>
                                        </Col>
                                        <Col style={{
                                            marginTop : '25px'
                                        }} md={3}>
                                            <Link style={{fontFamily : 'monospace', fontSize : '15px', textDecoration : 'none', color : 'black', }} to={`/product/${id}`}>{item.name}</Link>
                                        </Col>
                                        <Col style={{
                                            marginTop : '25px'
                                        }} md={2}>
                                            Rs. {item.price}
                                        </Col> 
                                        <Col style={{
                                            marginTop : '25px'
                                        }} md={3}>
                                           <Form.Control
                                              as='select'
                                              value={item.qty}
                                              onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                                           >
                                                {
                                                    [...Array(item.countInStock).keys()].map((x) => (
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    ))

                                                }
                                            
                                            
                                            </Form.Control> 
                                            </Col>
                                            <Col style={{
                                            marginTop : '25px'
                                        }} md={1}>
                                                <Button 
                                                    type='button'
                                                    variant='light'
                                                    onClick={() => removeFromCartHandler(item.product)}
                                                >
                                                    
                                                    <i className='fas fa-trash'></i>
                                                </Button>   
                                                
                                                
                                                
                                               
                                            </Col>

                                           
                                        
                                    </Row>
                                 </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )}
                </Col>
                <Col md={4}>
                        <Card style={{
                            marginLeft : '20px',
                            marginTop : '40px'
                        }}>
                            <ListGroup variant='flush'> 
                                 <ListGroup.Item>
                                 <p style={{fontWeight : 'bold'}}>total in cart ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) </p>
                                 <p style={{marginBottom : '40px', fontWeight : 'bold', fontStyle : 'italic'}}> total amount in pkr Rs. {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</p>
                                 </ListGroup.Item>

                            </ListGroup>
                            <ListGroup.Item>
                            
                             <Button
                                disabled = {cartItems.length === 0}
                                onClick={checkoutHandler}
                                className='btn btn-block' style={{
                                width : '50%',
                                height : '35px',
                                marginBottom : '10px',
                                marginTop : '10px',
                                backgroundColor : 'black',
                                color  : 'white',
                                borderRadius : '4px',
                                fontWeight : 'bold',
                                fontStyle : 'italic',
                                borderColor : 'black'
                            }}>checkout</Button>
                            

                            <br></br>
                   <Link to="/shop">
                    <Button className='btn btn-block' style={{
                        width : '50%',
                        height : '35px',
                        marginBottom : '10px',
                        backgroundColor : 'black',
                        color  : 'white',
                        borderRadius : '4px',
                        fontWeight : 'bold',
                        fontStyle : 'italic',
                        borderColor : 'black'
                    }}>back to shop</Button>
                    </Link>
                            </ListGroup.Item>
                        </Card>
                </Col>
            </Row>
        </Container>
       
    </Container>
    <BottomBar/>
    </div>
  )
}

export default Cart
