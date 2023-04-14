import React from 'react'
import { Button , Form , Row, Col, FormGroup, Image} from 'react-bootstrap'
import BottomBar from '../components/BottomBar'
import Locatenav from '../components/Locatenav'
// import {GoogleMap,useLoadScript, Marker} from '@react-google-maps/api'

function Groomers() {
    // const{} = useLoadScript({googleMapsApiKey: " "})
  return (
    <div  className='fontt'>
      <Locatenav/>
    <div style={{backgroundColor:'#F5EBE0'}}>
    <Row>
        <Col style={{
          marginLeft : "25px",
        }}>
        
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1v-_omGXEs8VqgYeDwZt8NnV_Zp5tJ1M&ehbc=2E312F" width="100%" height="480"></iframe>
        </Col>
        <Col>
        <h1 style={{ marginTop:130, marginLeft:120, fontSize:53}}>
        g r o o m e r s
        </h1>
        <p style={{ marginTop:70, marginLeft:120, marginRight:160, fontSize:25, justifyContent:"center"}}>
        Make your pet<br></br> significantly beautiful!
        </p>
    
        </Col>
    </Row>

    </div>
    <BottomBar/>
    </div>
  )
}

export default Groomers