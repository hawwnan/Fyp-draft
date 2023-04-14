import React from 'react'
import { Button , Form , Row, Col, FormGroup, Image} from 'react-bootstrap'
import Locatenav from '../components/Locatenav'
import BottomBar from '../components/BottomBar'
// import {GoogleMap,useLoadScript, Marker} from '@react-google-maps/api'

function Clinics() {
    // const{} = useLoadScript({googleMapsApiKey: " "})
  return (
    <div  className='fontt'>
      <Locatenav/>
    <div style={{backgroundColor:'#F5EBE0'}}>
    <Row  >
        <Col>
        <h1 style={{ marginTop:130, marginLeft:70, fontSize:53}}>
        c l i n i c s
        </h1>
        <p style={{ marginTop:70, marginLeft:70, marginRight:190, fontSize:25, justifyContent:"center"}}>
        Find the nearest clinics for your animal
        </p>
        
        </Col>
        <Col>
        
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=18Gf502SOJiM4UhRr48CY5XUjVykBAss&ehbc=2E312F" width="640" height="480"></iframe>

        </Col>
    </Row>

    </div>
    <BottomBar/>
    </div>
  )
}

export default Clinics