import React from 'react'
import {Container, Row, Col} from 'react-grid-system'
import Locatenav from '../components/Locatenav'
import BottomBar from '../components/BottomBar'
function Placed() {
  return (
    <div  className='fontt'>
      <Locatenav/>
    <Container style={{height : '700px'}}>
         <Container fluid style={{textAlign  : 'center', marginBottom : '60px'}}>
            <Row>
                <Col style={{
                fontSize : '30px',
            }}>
                    order placed
                </Col>
            </Row>
        </Container>
        <Container style={{textAlign : 'center'}}>
        <Row>
            <Col>
               <img src="/images/placed.jpg"/>
            </Col>
        </Row>
        </Container>
    </Container>
    <BottomBar/>
    </div>
  )
}

export default Placed
