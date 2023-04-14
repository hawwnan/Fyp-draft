import React from "react";
import { Row, Col } from "react-grid-system";
import { Container } from "react-bootstrap";
import Topbar from "../components/Topbar";
import BottomBar from "../components/BottomBar";
import Locatenav from "../components/Locatenav";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function Locate() {
  return (
    <div  className='fontt'>
      <Row>
        <Col className="ab">
          <Locatenav />
          <p
            style={{
              textAlign: "center",
              fontSize: "40px",
              fontWeight: "bold",
            }}
          >
            locate
          </p>
          <div style={{ float: "right", width: "60%" }}>
            <Button
              className="btn buttonsss af ag"
              style={{
                width: "32%",
                height: "100px",
                // fontFamily: "times new roman",
                backgroundColor: "#F5EBE0",
                color: "black",
                // fontWeight:"bold",
                outline: "none",
                borderColor: "#F5EBE0",
                fontSize: "33px",
                marginRight: "15%",
                marginTop: "11%",
                marginLeft: "30%",
                marginBottom: "5%",
              }}
            >
               <Link to="/clinics" style={{textDecoration:"none",color:"black"}} aria-current="page">
                   <text>clinics</text>
                  </Link>
             
            </Button>
            <p
              style={{
                color: "white",
                fontSize: "35px",
                marginLeft: "16%",
              }}
            >
              Providing the best and fastest medical care for your pet!
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="ab1">
          <div style={{ float: "left", width: "60%", marginTop: "12%" }}>
            <Button
              className="btn buttonsss af ag"
              style={{
                width: "280px",
                height: "100px",
                // fontFamily: "times new roman",
                backgroundColor: "#F5EBE0",
                color: "black",
                // fontWeight:"bold",
                outline: "none",
                borderColor: "#F5EBE0",
                fontSize: "33px",
                marginRight: "15%",
                marginTop: "11%",
                marginLeft: "30%",
                marginBottom: "5%",
              }}
            >
                <Link to="/groomers" style={{textDecoration:"none",color:"black"}} aria-current="page">
                   <text>groomers</text>
                  </Link>
            </Button>
            <p
              style={{
                color: "white",
                fontSize: "35px",
                marginLeft: "16%",
              }}
            >
              Best Grooming centres to keep your pet and house clean!
            </p>
          </div>
        </Col>
      </Row>
      <BottomBar />
    </div>
  );
}

export default Locate;
