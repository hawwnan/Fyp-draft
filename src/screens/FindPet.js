import React from 'react'
import { Button , Form , Row, Col, FormGroup , Container} from 'react-bootstrap'
import Locatenav from '../components/Locatenav'
import BottomBar from '../components/BottomBar'

function FindPet() {
  return (
    <div style={{backgroundColor:'#F5EBE0'}}  className='fontt'>
      <Locatenav/>
    <h2 className='text-center' style={{fontWeight:'bold', fontStyle:"italic", paddingTop:30,marginBottom:"60px"}}> find your pet</h2>
    {/* <div className='text-center  my-2'> 
      <Button type='radio' className='mx-2' size="sm">found</Button> 
      <Button className='mx-2' size="sm">lost</Button>
    </div> */}
     <Row>
        <Col>
        <p className='my-4' style={{marginTop:20 , marginRight:200, marginLeft:80, fontSize:30}}>our feature matching algorithm will help you unite with your beloved animal, don’t lose hope</p>
        
        
        
        
        <p  style={{marginTop:200 , marginRight:220, marginLeft:80 ,  fontSize:12, fontStyle:"italic" ,fontWeight:"bold"}}>*you will be notified vial text and email if our system finds an animal with similar features as your pet</p>
        </Col>
        
        <Col> 
        <Container
            style={{
              backgroundColor: "#33292A",
              borderRadius: "4px",
              width: "500px",
              height: "480px",
              paddingTop: "33px",
              color:"white",
              marginLeft:"180",
              marginBottom:"50px",
              // width:"500px",
              // height:"700px"
            }}
            className="mx-auto"
          >
        
    <Form style={{ width:"80%", margin:"auto", marginTop:20, justifyContent:'center' , marginBottom:"20px"}}>
        <Col>
        <div className='text-center  my-2' style={{marginBottom:30}}> 
      {/* <Button type='radio' className='mx-2' size="sm">found</Button> 
      <Button className='mx-2' size="sm">lost</Button> */}
      <Form.Check
            inline
            label="Lost"
            name="group1"
            type="radio"
            id={`inline-radio-1`}
          />
           <Form.Check
            inline
            label="Found"
            name="group1"
            type="radio"
            id={`inline-radio-2`}
          />
    </div>
    </Col>
    
    
             
             
    
    
    
   
    <Form.Group controlId="formFileSm" className="mb-3" style={{marginBottom: "25px", display:'inline-flex' , marginTop:'10px'}} >
        {/* <Form.Label>add photo</Form.Label> */}
        <i className='fas fa-image' style={{
                    color: "#ffffff",
                    marginRight: "2px",
                    marginTop: "7px",
                  }}> </i>
                  <Form.Control type="file" size="sm" placeholder='add photo'  style={{
                    background: "none",
                    borderRadius: "none",
                    border: "none",
                    margin: "none",
                    width: "340px",
                    height: "25px",
                    fontSize: "15px",
                    color: "white",
                    '::placeholder': { 
                      color: 'red' 
                    } 
                    
                  }} />
      </Form.Group>
      <hr
                style={{
                  height: "1.5px",
                  borderWidth: "0",
                  color: "white",
                  backgroundColor: "white",
                  marginTop: "-10px",
                }}
              ></hr>
     

      <Form.Group className="mb-3" controlId="formBasic" style={{marginBottom: "25px", display:'inline-flex'}}>
        {/* <Form.Label>Email address</Form.Label> */}
        <i className='fas fa-location-pin' style={{
                    color: "#ffffff",
                    marginRight: "2px",
                    marginTop: "7px",
                  }}></i>
        <Form.Control  style={{
                    background: "none",
                    borderRadius: "none",
                    border: "none",
                    margin: "none",
                    width: "340px",
                    height: "25px",
                    fontSize: "15px",
                    color: "white", 
                     }}  type="text" placeholder="area" />
        
      </Form.Group>
      <hr
                style={{
                  height: "1.5px",
                  borderWidth: "0",
                  color: "white",
                  backgroundColor: "white",
                  marginTop: "-10px",
                }}
              ></hr>

      <Form.Group className="mb-3" style={{marginBottom: "25px",display:'inline-flex'}}>
      <i className='fas fa-calendar' style={{
                    color: "#ffffff",
                    marginRight: "2px",
                    marginTop: "7px",
                  }}></i>
        {/* <Form.Label>date</Form.Label> */}
        <Form.Control type="date"  style={{
                    background: "none",
                    borderRadius: "none",
                    border: "none",
                    margin: "none",
                    width: "340px",
                    height: "25px",
                    fontSize: "15px",
                    color: "white",
                  }} />
      </Form.Group>
      <hr
                style={{
                  height: "1.5px",
                  borderWidth: "0",
                  color: "2BB09B",
                  backgroundColor: "white",
                  marginTop: "-10px",
                }}
              ></hr>

      <Form.Group className="mb-3" controlId="formBasicPassword" style={{marginBottom: "25px",display:'inline-flex'}}>
      <i className='fas fa-phone' style={{
                    color: "#ffffff",
                    marginRight: "2px",
                    marginTop: "7px",
                  }}></i>
        {/* <Form.Label>number</Form.Label> */}
        <Form.Control type="text" placeholder="phone number"   style={{
                    background: "none",
                    borderRadius: "none",
                    border: "none",
                    margin: "none",
                    width: "340px",
                    height: "25px",
                    fontSize: "15px",
                    color: "white",
                  }}/>
                  
      </Form.Group>
      <hr
                style={{
                  height: "1.5px",
                  borderWidth: "0",
                  color: "white",
                  backgroundColor: "white",
                  marginTop: "-10px",
                }}
              ></hr>

      <Form.Group className="mb-3" controlId="formBasicEmail" style={{marginBottom: "25px", display:'inline-flex'}}>
        {/* <Form.Label>Email address</Form.Label> */}
        <i className='fa-solid fa-envelope' style={{
                    color: "#ffffff",
                    marginRight: "2px",
                    marginTop: "7px",
                  }}></i>
        <Form.Control  type="email" placeholder="email"  style={{
                    background: "none",
                    borderRadius: "none",
                    border: "none",
                    margin: "none",
                    width: "340px",
                    height: "25px",
                    fontSize: "15px",
                    color: "white",
                  }} />
                  
        
      </Form.Group>
      <hr
                style={{
                  height: "1.5px",
                  borderWidth: "0",
                  color: "white",
                  backgroundColor: "white",
                  marginTop: "-10px",
                }}
              ></hr>
      
      {/* <Button variant="primary" type="submit">
        Submit
      </Button> */}
      <Button
                className="btn buttons"
                style={{
                  width: "100%",
                  height: "50px",
                  // fontFamily: "times new roman",
                  backgroundColor: "#F5EBE0",
                  color: "black",
                  // fontWeight:"bold",
                  outline: "none",
                  color: "black",
                  backgroundColor: "#F5EBE0",
                  borderColor: "black",
                  marginTop: "15%",
                }}
              >
                <text style={{ fontWeight: "bold" }}>submit</text>
              </Button>
    </Form>
    </Container>
    </Col>
    
     </Row>
<BottomBar/>
    </div>

  )
}

export default FindPet