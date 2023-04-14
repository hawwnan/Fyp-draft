import React from 'react'
import Topbar from "../components/Topbar";
import BottomBar from "../components/BottomBar";
import { Row, Col } from "react-grid-system";
import { Container } from "react-bootstrap";
import Signupform from '../components/Signupform';
import Locatenav from '../components/Locatenav';
function Signup() {
  return (
    <div  className='fontt'>
      <div style={{ backgroundColor: "#F5EBE0", position: "relative" }}>
        <Locatenav />
        <Container>
          <Row>
            <Col
              xs={12}
              sm={12}
              md={4}
              lg={4}
              className="mx-3"
              style={{ alignItems: "center" }}
            >
              <img
                src="/images/friends.jpeg"
                alt="Girl in a jacket"
                // style={{
                //   // width: "550px",
                //   // height: "700px",
                //   // width: "100%",
                //   // height: "auto",
                //   "max-width": "90%",
                //   height: "auto",
                //   paddingTop: "30px",
                //   paddingLeft: "1px",
                //   paddingBottom: "30px",
                //   marginLeft: "auto",
                //   marginRight: "auto",
                // }}
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
              <div
                style={{ textAlign: "center", marginTop: "30px" }}
                className="mx-auto"
              >
                <h1>SIGN UP</h1>
                <text>Enter your details to sign UP</text>
              </div>
              <Signupform />
            </Col>
          </Row>
        </Container>
        <BottomBar />
      </div>
    </div>
  );
}

export default Signup
