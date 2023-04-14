import React from "react";
import { Row, Col ,Container} from "react-grid-system";
import {Link} from "react-router-dom"
function BottomBar() {
  return (
    <div className="foot">
      <Container>
        <Row>
          <Col style={{ marginTop: "10px" }}  className="a">
            Resources
            <br />
            <Link to="/aboutus" style={{textDecoration:"none",color:"white"}} class="nav-link active" aria-current="page">
            <text className="light">About Us</text>
            </Link>
          </Col>
          <Col style={{ marginTop: "10px" }} className="a">
            Product
            <br />
            <Link to="/shop" style={{textDecoration:"none",color:"white"}}  aria-current="page">
            <text className="light">Shop</text>
            </Link>
            <br />
            <Link to="/locate" style={{textDecoration:"none",color:"white"}}  aria-current="page">
            <text className="light">Locate</text>
            </Link>
            <br />
            <Link to="/findpet" style={{textDecoration:"none",color:"white"}} aria-current="page">
            <text className="light">Find Pet</text>
            </Link>
          </Col>
          <Col className="a" style={{ marginTop: "10px" }}>
            Email
            <br />
            <text className="light">paws&claws@gmail.com</text>
            <br />
            Address
            <br />
            <text className="light">21B-Bakers Street</text>
          </Col>
          <Col className="a" style={{ marginTop: "10px" }}>
            Contact Us
            <br />
            <text className="light">+92 302 2233111</text>
          </Col>
          <Col className="a" style={{ marginTop: "10px" }}>
            Follow Us
            <br />
            <Link to="https://www.instagram.com"> 
            <i class="fa-brands fa-instagram px-1" style={{color:"white"}}></i>            
             </Link>            

            <Link to='https://www.facebook.com'>
            <i class="fa-brands fa-square-facebook px-1" style={{color:"white"}}></i>
            </Link>

            <Link to='https://www.twitter.com'>
            <i class="fa-brands fa-square-twitter px-1" style={{color:"white"}}></i>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr
              style={{
                // width: "100%",
                // height: "1px",
                // display: "inline-flex",
                // marginTop: "20px",
                border: "none",
                height: "2px",
                background: "white",
              }}
            />
          </Col>
          <Col style={{ textAlign: "center",fontWeight:"bold" }}>
            <text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Copyright @2023</text>
          </Col>
          <Col>
            <hr
              style={{
                // width: "100%",
                // height: "1px",
                // display: "inline-flex",
                // marginTop: "20px",
                border: "none",
                height: "2px",
                background: "white",
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BottomBar;
