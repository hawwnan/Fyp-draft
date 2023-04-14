import React,{useState, useEffect} from 'react'
import { Button , Form  ,FormGroup , Image} from 'react-bootstrap'
import {Container, Row , Col} from 'react-grid-system'
import Locatenav from '../components/Locatenav'
import BottomBar from '../components/BottomBar'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { getUserDetails,updateUserProfile } from '../actions/userActions'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {USER_UPDATE_PROFILE_RESET} from '../constants/UserConstants'

function UserProfile() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const [message, setMessage] = useState('')

  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

 

  const userDetails = useSelector(state => state.userDetails)
  const {error, loading, user} = userDetails

  
  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const userUpdateProfile = useSelector(state => state.userUpdateProfile)
  const {success} = userUpdateProfile

  useEffect(() => {
    if(!userInfo){
          navigate('/login')
    }else{
      if(!user || !user.name || success){
             dispatch({
              type : USER_UPDATE_PROFILE_RESET
             })
             dispatch(getUserDetails('profile'))
      }else{
          setName(user.name)
          setEmail(user.email)
      }
    }

  }, [navigate, userInfo, dispatch, user, success])

  const submitHandler = (e) => {
    console.log('in submit')
    e.preventDefault()

    if(password !== confirmPassword){
      setMessage('Passwords do not match')
    }else{
       dispatch(updateUserProfile({
        'id': user._id,
        'name' : name,
        'email' : email, 
        'password' : password,
      }))
    }
  }
  

  return (
    <div  className='fontt'>
  <Locatenav/>
    <div style={{backgroundColor:'#F5EBE0'}}>
    <h2 className='text-center' style={{fontWeight:'bold', fontStyle:"italic" , paddingTop:30}}> profile information</h2>
    {message && <Message variant='danger'>{error}</Message>}
    {error && <Message variant='danger'>{error}</Message>}
    {loading && <Loader/>}
   
    <Container>
     <Row>   
        <Col md={6} style={{
              marginTop:"10px",
              }}> 
        <Container
            style={{
              marginTop:"40px",
              backgroundColor: "#33292A",
              borderRadius: "4px",
              width: "500px",
              height: "480px",
              paddingTop: "33px",
              color:"white",
              marginBottom:"50px",
              // width:"500px",
              // height:"700px"
            }}
            className="mx-auto"
          >
        
    <Form onSubmit={submitHandler} style={{ width:"80%", margin:"auto", marginTop:20, justifyContent:'center' , marginBottom:"20px"}}>
                  
             
    <Form.Group className="mb-3" controlId="name" style={{marginBottom: "25px",display:'inline-flex'}}>
      
      
        <i class="fa-solid fa-file-signature" style={{color: '#ffffff',
                    marginRight: "2px",
                    marginTop: "7px"}}></i>
        <Form.Control 
                    required
                    type="name" 
                    placeholder="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
           
        
                    style={{
                    background: "none",
                    borderRadius: "none",
                    border: "none",
                    margin: "none",
                    width: "340px",
                    height: "25px",
                    fontSize: "15px",
                    color: "white",
                    // marginLeft:150,
                    fontWeight:"bold"
                  }}/>
                  <i className='fas fa-edit' style={{
                    color: "#ffffff",
                    marginLeft: "0px",
                    marginTop: "7px",
                  }}></i>
                  
      </Form.Group>
      <hr
                style={{
                  height: "1.5px",
                  borderWidth: "0",
                  color: "white",
                  backgroundColor: "white",
                  marginTop: "-10px",
                  
                  // marginLeft:159,
                  marginBottom:30
                }}
              ></hr>
    

      <Form.Group className="mb-3" controlId="email" style={{marginBottom: "25px", display:'inline-flex'}}>
        {/* <Form.Label>Email address</Form.Label> */}
        <i className='fa-solid fa-envelope' style={{
                    color: "#ffffff",
                    marginRight: "2px",
                    marginTop: "7px",
                  }}></i>
        <Form.Control  
                  required
                  type="email"
                  placeholder="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
        
                  style={{
                    background: "none",
                    borderRadius: "none",
                    border: "none",
                    margin: "none",
                    width: "340px",
                    height: "25px",
                    fontSize: "15px",
                    color: "white",
                  }} />
                    <i className='fas fa-edit' style={{
                    color: "#ffffff",
                    marginLeft: "0px",
                    marginTop: "7px",
                  }}></i>
        
      </Form.Group>
      <hr
                style={{
                  height: "1.5px",
                  borderWidth: "0",
                  color: "white",
                  backgroundColor: "white",
                  marginTop: "-10px",
                  marginBottom:30
                }}
              ></hr>
                <Form.Group className="mb-3" controlId="password" style={{marginBottom: "25px",display:'inline-flex'}}>
                <i
                  style={{
                    color: "#ffffff",
                    marginRight: "2px",
                    marginTop: "7px",
                  }}
                  class="fa-solid fa-lock"
                ></i>
        {/* <Form.Label>number</Form.Label> */}

        <Form.Control 
                    type="password" 
                    placeholder="password"  
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    
                    style={{
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
      <i className='fas fa-edit' style={{
                    color: "#ffffff",
                    marginLeft: "0px",
                    marginTop: "7px",
                  }}></i>
      <hr
                style={{
                  height: "1.5px",
                  borderWidth: "0",
                  color: "white",
                  backgroundColor: "white",
                  marginTop: "-10px",
                  marginBottom:30
                }}
              ></hr>

<Form.Group className="mb-3" controlId="passwordConfirm" style={{marginBottom: "25px",display:'inline-flex'}}>
                <i
                  style={{
                    color: "#ffffff",
                    marginRight: "2px",
                    marginTop: "7px",
                  }}
                  class="fa-solid fa-lock"
                ></i>
        {/* <Form.Label>number</Form.Label> */}

        <Form.Control 
                    type="password" 
                    placeholder="Confirm password"  
                    value={confirmPassword}
                    onChange={(e) => setconfirmPassword(e.target.value)} 
                    
                    style={{
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
      <i className='fas fa-edit' style={{
                    color: "#ffffff",
                    marginLeft: "0px",
                    marginTop: "7px",
                  }}></i>
      <hr
                style={{
                  height: "1.5px",
                  borderWidth: "0",
                  color: "white",
                  backgroundColor: "white",
                  marginTop: "-10px",
                  marginBottom:30
                }}
              ></hr>       
      
      <Button
                className="btn buttons"
                type='submit'
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
                  marginTop: "18%",
                }}  
                
              >
                <text style={{ fontWeight: "bold" , fontSize:20}}>update</text>
              </Button>
    </Form>
    </Container>
    </Col>
    <Col md={6}>
       My orders
    </Col>
     </Row>
     </Container>
    </div>
    <BottomBar/>
    </div>
    
  )
}

export default UserProfile