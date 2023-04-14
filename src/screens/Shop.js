import React from 'react'
import { Container , Row, Col, Card } from 'react-bootstrap'
import {useState, useEffect} from 'react'
import ShopItem from '../components/ShopItem'
import Locatenav from '../components/Locatenav'
import BottomBar from '../components/BottomBar'
import axios from 'axios'

function Shop() {
  
   const [shop, setShop] = useState([])


   useEffect(() => {
         
        async function fetchProducts(){
          const {data} = await axios.get('/api/products/')
          setShop(data)
        }

        fetchProducts()
       
   },[])


  return (
    <div style={{backgroundColor:'#F5EBE0'}}  className='fontt'>
      <Locatenav/>
    <h3 className='text-center' style={{alignContent:"center",marginBottom:"20px" , fontWeight:"bold" , fontStyle:"italic"}}>shop</h3>
       <div style={{ width: "100%",height: "55px",left: "0px",top: "153px",backgroundColor: "#33292A"}}>
          <div className='py-3' style={{left:100}} > 
            <a href='#all' className='my-auto' style={styles.filters} > all  </a>
            <a href='#food' style={styles.filters}>food</a>
            <a href='#medicine' style={styles.filters}>medicine</a>
            </div> 
            </div>  
        <Container  style={{marginBottom:"15px"}}>
       
      
        <div>
          
            <div className="py-10" >
                <Row>
                    {shop.map((items) =>(

                      //  <Col key={items._id} sm={12} md={6} lg={4} xl={3} style={{display:"inline-block" , alignItems:'center'}}>
                        //    /* <h3>{items.name}</h3> */
                        <Col key={items._id} sm={12} md={6} lg={4} xl={3}>
                           <ShopItem item = {items}/>
                        </Col>


                    ))}
                </Row>

            </div>
    <div className='my-auto' style={{
// position: "absolute",
width: "234px",
height: "42px",
textAlign:"center",
top: "1111px",
margin:"auto",
background: "#33292A",
color:'white'}}><p style={{paddingTop:"8px"}}>Page 1 2 3</p></div>
            </div>
            </Container>
            <BottomBar/>
            </div>
  )
}
const styles = {
    filters: {
     
      color: "white",
      textDecoration:'none',
      margin: 3,
      paddingLeft: 9,
      fontSize: '16px',
    },
  };
export default Shop