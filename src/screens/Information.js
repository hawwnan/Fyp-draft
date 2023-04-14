import React from 'react'
import { useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Container,Row,Col} from 'react-grid-system'
import { Image,ListGroup,Button, Card , Form} from 'react-bootstrap'
import StarRating from '../components/StarRating'
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Locatenav from '../components/Locatenav'
import BottomBar from '../components/BottomBar'
import {listProductDetails} from '../actions/productActions'
// import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Information() {
   
    const [qty, setQty] = useState(1)
    const navigate = useNavigate()

    const {id} = useParams();
    const dispatch = useDispatch() 
    const productDetails = useSelector(state => state.productDetails)
    const {loading, error, product} = productDetails

    useEffect(() => {
        dispatch(listProductDetails(id))
    }, [dispatch, id])

    const addToCartHandler = () => {
      navigate(`/cart/${id}?qty=${qty}`)
    }

  return (

    <div  className='fontt'>
        <Locatenav/>
    <Container style={{ height : '100%'}}>
        <Container fluid style={{textAlign  : 'center', marginBottom : '60px'}}>
            <Row>
                <Col style={{
                fontFamily : 'monospace',
                fontSize : '30px',
            }}>    
                    product information
                </Col>
            </Row>
        </Container>
        <Container>
            {loading ? 
                <Loader/>
                : error
                ? <Message variant='danger'>{error}</Message>
                : 
                (
            //     <Row>
            //     <Col lg={4} sm={12} md={6}>
            //       <img src={product.image}
            //       style={{borderBlockColor : 'black',
            //     border: '5px solid',
            //     borderWidth : 'thin',
            //     padding : '5px',
            //     margin : '5px',
            //     height  : '90%',
            //     width : '90%'
            //     }}
            //       />
            //     <p>{product.rating} reviews</p>
            //     </Col>
            //     <Col lg={8} sm={12} md={6}>
            //        <p style={{textAlign : 'left', fontFamily : 'initial', fontSize : '30px', fontStyle : 'italic'}}>
            //         {product.name}
            //        </p>
            //        <hr style={{height:'3px',borderWidth: '0',color: 'black' , backgroundColor: 'black', width : '55px', marginRight : '700px'}}></hr>
            //        <p style={{fontFamily : 'sans-serif', fontSize : '20px'}}><b style={{textDecorationLine : 'line-through'}}>Rs. 3000 only</b> Rs. {product.price}</p>
            //        <p style={{fontFamily : 'monospace', fontSize : '18px'}}>{product.description}</p>
            //        <div style={{marginLeft : '7px', marginTop : '35px'}} class="btn-group mr-2" role="group" aria-label="Second group">
            //                 <button style={{ width : '50px', height : '35px', borderColor : 'black', borderRadius : '3px', background : '#33292A', color : 'white', fontFamily : 'cursive'}} 
            //                 type="button" class="btn btn-secondary">-</button>
            //                 <button style={{ width : '50px', height : '35px', borderColor : 'black', borderRadius : '3px', background : '#33292A', color : 'white', fontFamily : 'cursive'}} 
            //                 type="button" class="btn btn-secondary">1</button>
            //                <button style={{ marginRight : '15px' ,width : '50px', height : '35px', borderColor : 'black', borderRadius : '3px', background : '#33292A', color : 'white', fontFamily : 'cursive'}} 
            //                 type="button" class="btn btn-secondary">+</button>
            //                    <button style={{ width : '150px', height : '35px', borderColor : 'black', borderRadius : '3px', background : '#33292A', color : 'white', fontFamily : 'cursive'}} 
            //                 type="button" class="btn btn-secondary">add to cart</button>
            //         </div>

            //         <p style={{ marginTop : '20px',fontFamily : 'cursive', fontStyle : 'italic'}}>Add a review below, We appreciate your feedback</p>
            //         <StarRating/> 
            //     </Col>
            // </Row>
            <Row>
            <Col md={6}>
              <Image style={{borderBlockColor : 'black',
                border: '5px solid',
                borderWidth : 'thin',
                padding : '5px',
                margin : '3px',
                height  : '90%',
                width : '90%'
            }} src={product.image} alt={product.name} fluid/>
            <StarRating/>
            </Col>
            <Col md={3}>
              <ListGroup variant='flush'>
                <ListGroup.Item style={{
                    backgroundColor : '#F5EBE0'
                }}>
                  <h3 style={{textAlign : 'left', fontFamily : 'initial', fontSize : '45px', fontStyle : 'italic', marginTop : '20px'}}>
                    {product.name}
                  </h3>
                </ListGroup.Item>
                <ListGroup.Item  style={{
                    backgroundColor : '#F5EBE0',
                    fontSize : '20px'

                }} className='my-3'>
                <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'}/>
                </ListGroup.Item>
                <ListGroup.Item  style={{
                    backgroundColor : '#F5EBE0',
                    fontSize : '20px'
                }}>
                  Price: Rs. {product.price}
                </ListGroup.Item>
                <ListGroup.Item  style={{
                    backgroundColor : '#F5EBE0',
                    fontFamily : 'monospace',
                    fontSize : '25px'
                }}>
                  Description: {product.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item  style={{
                    backgroundColor : '#F5EBE0'
                }}>
                    <Row>
                      <Col>
                         Price:
                      </Col>
                      <Col>
                          <strong>
                            Rs. {product.price}
                          </strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
  
                  <ListGroup.Item  style={{
                    backgroundColor : '#F5EBE0'
                }}>
                    <Row>
                      <Col>
                         Status:
                      </Col>
                      <Col>
                          <strong>
                            {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                          </strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  {product.countInStock > 0 && (
                    <ListGroup.Item style={{
                      backgroundColor : '#F5EBE0'
                    }}>
                      <Row>
                        <Col>Qty</Col>
                        <Col xs='auto' className='my-1'>
                           <Form.Control 
                           as='select' 
                           value={qty}
                           onChange={(e) => setQty(e.target.value)}
                           >

                            {

                              [...Array(product.countInStock).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              ))
                            }

                           </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}
  
                  <ListGroup.Item  style={{
                    backgroundColor : '#F5EBE0'
                }}>
                     <Button  
                    onClick={addToCartHandler}
                    style={{
                    width: "100%",
                    height: "50px",
                    // fontFamily: "times new roman",
                    backgroundColor: "black",
                    color: "white",
                    // fontWeight:"bold",
                    outline: "none",
                    borderColor: "black",
                    marginBottom: "12px",
                  }} className='btn-block' disabled={product.countInStock === 0} type='button'>Add to Cart</Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
        </Row>
                )
                
            }
           
        </Container>
        <Container style={{marginTop : '40px'}}>
            <Row>
                <Col>
                 <div style={{
                    height : '200px',
                    padding : '5px',
                    width:"100%",
                    marginBottom:"10px"
                }} className='abcd'>
                    <h2 style={{marginLeft : '30px',
                                marginTop : '20px', fontFamily : 'monospace'}}>review</h2>
                    <p style={{marginLeft : '30px',  fontFamily : 'cursive', fontSize : '15px'}}>No reviews in yet</p>
                    <input placeholder='Only logged in customers can add a review' style={{border : 'solid thin', width : '60%', marginBottom : '10px', marginLeft : '30px', height : '40px', backgroundColor : '#E4D5DB', borderColor  : 'black', borderRadius : '3px', padding : '15px',
                fontFamily : 'cursive', fontSize : '15px',  }}>
                        
                    </input>
                    <Button className='btn btn-block' style={{
                        marginBottom : '5px',
                        
                        marginLeft : '30px',
                        width : '150px',
                        backgroundColor : 'black',
                        color : 'white',
                        borderRadius : '3px',
                        borderColor : 'black',
                        fontWeight : 'bold',
                        
                    }}

                     type='submit'>Submit</Button>
                </div>
                  
                </Col>
            </Row>
        </Container>
    </Container>
    <BottomBar/>
    </div>
  )
}

export default Information
