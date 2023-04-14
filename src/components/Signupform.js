import React, {useEffect, useState} from "react";
import { Row, Col, Container } from "react-grid-system";
import { Button, Form } from "react-bootstrap";
import "../my.css";
import { useDispatch, useSelector } from "react-redux";
import Message from '../components/Message'
import Loader from '../components/Loader'
import {register} from '../actions/userActions'
import { Link, useLocation, useNavigate } from "react-router-dom";
function Signupform() {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const [message, setMessage] = useState('')

  const location = useLocation()
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const redirect = location.search ? location.search.split('=')[1] : '/'

  const userRegister = useSelector(state => state.userRegister)
  const {error, loading, userInfo} = userRegister

  useEffect(() => {
    if(userInfo){
          navigate(redirect)
    }
  }, [navigate, userInfo, redirect])

  const submitHandler = (e) => {
    console.log('in submit of signup')
    e.preventDefault()

    if(password != confirmPassword){
      setMessage('Passwords do not match')
    }else{
    dispatch(register(name,email, password))
    }
  }

  return (
    <Container>
      <Row>
        <Col
          sm={12}
          xs={12}
          md={6}
          lg={6}
          // className="mx-auto"
          style={{
            textAlign: "center",
            marginTop: "3%",
            marginBottom: "30px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Container
            style={{
              backgroundColor: "#33292A",
              borderRadius: "4px",
              width: "400px",
              height: "440px",
              paddingTop: "33px",
              // width:"500px",
              // height:"700px"
            }}
            className="mx-auto"
          >
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message 
            variant='danger'>{error}</Message>}
            {loading && <Loader/>}
            <Form onSubmit={submitHandler} className="mx-auto">
              <Form.Group
                controlId="name"
                style={{
                  marginBottom: "25px",
                  display: "inline-flex",
                }}
              >
                <i
                  style={{
                    color: "#ffffff",
                    marginRight: "2px",
                    marginTop: "7px",
                  }}
                  class="fa-solid fa-user"
                ></i>
                <Form.Control 
                  required
                  style={{
                    background: "none",
                    borderRadius: "none",
                    border: "none",
                    margin: "none",
                    width: "340px",
                    height: "25px", 
                    fontSize: "15px",
                    color: "white",
                  }}
                  type="name"
                  value={name}
                  placeholder="username"
                  onChange={(e) => setName(e.target.value)}
                />
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
              <Form.Group
                controlId="email"
                style={{
                  marginBottom: "25px",
                  display: "inline-flex",
                }}
              >
                <i
                  style={{
                    color: "#ffffff",
                    marginRight: "2px",
                    marginTop: "7px",
                  }}
                  class="fa-solid fa-envelope"
                ></i>
                <Form.Control
                  required
                  style={{
                    background: "none",
                    borderRadius: "none",
                    border: "none",
                    margin: "none",
                    width: "340px",
                    height: "25px",
                    fontSize: "15px",
                    color: "white",
                  }} 
                  type="email"
                  value={email}
                  placeholder="email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
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
              <Form.Group
                controlId="password"
                style={{
                  marginBottom: "25px",
                  display: "inline-flex",
                }}
              >
                <i
                  style={{
                    color: "#ffffff",
                    marginRight: "2px",
                    marginTop: "7px",
                  }}
                  class="fa-solid fa-lock"
                ></i>
                <Form.Control
                  required
                  style={{
                    background: "none",
                    borderRadius: "none",
                    border: "none",
                    margin: "none",
                    width: "340px",
                    height: "25px",
                    fontSize: "15px",
                    color: "white",
                  }}
                  type="password"  
                  value={password}
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <hr
                style={{
                  height: "1px",
                  borderWidth: "0",
                  color: "white",
                  backgroundColor: "white",
                  marginTop: "-10px",
                }}
              ></hr>
              <Form.Group
                controlId="passwordConfirm"
                style={{
                  marginBottom: "25px",
                  display: "inline-flex",
                }}
              >
                <i
                  style={{
                    color: "#ffffff",
                    marginRight: "2px",
                    marginTop: "7px",
                  }}
                  class="fa-solid fa-lock"
                ></i>
                <Form.Control
                  required
                  style={{
                    background: "none",
                    borderRadius: "none",
                    border: "none",
                    margin: "none",
                    width: "340px",
                    height: "25px",
                    fontSize: "15px",
                    color: "white",
                  }}
                  type="password"
                  value={confirmPassword}
                  placeholder="confirm password"
                  onChange={(e) => setconfirmPassword(e.target.value)}
                />
              </Form.Group>
              <hr
                style={{
                  height: "1px",
                  borderWidth: "0",
                  color: "white",
                  backgroundColor: "white",
                  marginTop: "-10px",
                }}
              ></hr>
              <div class="form-check" style={{ display: "inline-flex" }}>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  class="form-check-label"
                  for="flexCheckDefault"
                  style={{ color: "white" }}
                >
                  &nbsp; I agree to terms & conditions
                </label>
              </div>

              <Button
                type="submit"
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
                  marginTop: "12px",
                }}
              >
                <text style={{ fontWeight: "bold" }}>create account</text>
              </Button>
              <br />
              <div>
                <br />
                <text
                  style={{
                    color: "white",
                    // fontStyle: "italic",
                    fontWeight: "lighter",
                    fontSize: "15px",
                  }}
                >
                  Already have an account?{" "}
                  {/* <a>
                    <text style={{ fontSize: "18px", fontWeight: "bold" }}>
                      SIGN UP
                    </text>
                  </a> */}
                  &nbsp;
                  <Link
                    to={redirect ? `/login?redirect=${redirect}` : '/login'}
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    SIGN IN
                  </Link>
                </text>
              </div>
            </Form>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Signupform;
