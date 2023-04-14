import React, {useEffect, useState} from "react";
import Topbar from "../components/Topbar";
import BottomBar from "../components/BottomBar";
import {Link} from 'react-router-dom'
import { Row, Col } from "react-grid-system";
import { Container } from "react-bootstrap";
import {useDispatch, useSelector} from 'react-redux'
import Formss from "../components/Formss";
import Message from '../components/Message'
import Loader from '../components/Loader'
import Locatenav from "../components/Locatenav";
import { useLocation, useNavigate } from "react-router-dom";

// import img1 from '/images/Signup.png'
function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div style={{ backgroundColor: "#F5EBE0", position: "relative" }}  className='fontt'>
      <Locatenav />
      <Container>
        <Row>
          <Col xs={12} sm={12} md={4} lg={4}>
            <img
              src="/images/Signup.png"
              alt="Girl in a jacket"
              style={{
                // width: "550px",
                // height: "700px",
                "max-width": "100%",
                height: "100%",
                paddingTop: "30px",
                paddingLeft: "50px",
                paddingBottom: "30px",
              }}
            ></img>
          </Col>
          <Col>
            <div style={{ textAlign: "center", marginTop: "30px" }}>
              <h1>SIGN IN</h1>
              <text>Enter your details to sign in</text>
              <Formss />
            </div>
            {/* <Formss/> */}
          </Col>
        </Row>
      </Container>
      <BottomBar />
    </div>
  );
}

export default Login;
