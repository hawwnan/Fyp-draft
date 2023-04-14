import React from 'react'
import Topbar from '../components/Topbar'
import BottomBar from '../components/BottomBar'
import { Container } from 'react-bootstrap'
import Locatenav from '../components/Locatenav';
function Aboutus() {
  return (
    <div style={{ backgroundColor: "#F5EBE0" }} className='fontt'>
      <Locatenav />
      <Container style={{ textAlign: "center" }}>
        <p
          style={{ fontSize: "35px", fontWeight: "bold", marginBottom: "90px" }}
        >
          about us
        </p>
        <p style={{ fontSize: "30px", marginBottom: "28px" }}>
          welcome to paws & claws
        </p>
        <p style={{ fontSize: "20px", marginBottom: "110px" }}>
          paws & claws is a professional pet shop platform. Here we will provide
          you only interesting content, which you will like very much. We're
          dedicated to providing you the best of pet shop, with a focus on
          dependability and e-commerce, ai . We're working to turn our passion
          for pet shop into a booming online website. We hope you enjoy our pet
          shop as much as we enjoy offering them to you.
        </p>
        <p style={{ fontSize: "30px", marginBottom: "28px" }}>
          terms and conditions
        </p>
        <p style={{ fontSize: "20px", marginBottom: "110px" }}>
          our site uses cookies to improve the overall user experience with our
          services. Moreover for pictures we might need an access to the device
          storage.
        </p>
      </Container>
      <BottomBar />
    </div>
  );
}

export default Aboutus
