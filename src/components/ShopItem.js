import React from 'react'
import { Card ,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function ShopItem({item}) {
    console.log(item )
  return (
    <Card className='my-3 p-3 fontt' > 
      {/* style={{border:"1px solid white", borderRadius:"5px", backgroundColor:'white' , width:"30%",height:"45%"}} */}

        
        <Link to={`/product/${item._id}`}>
        <Card.Img  src={item.image} />
        </Link>
        <Card.Body style={{textAlign:'center'}}>
            <Card.Title as="div"> 
           <p style={{fontWeight:"bold"}}>{item.name}</p> 
            </Card.Title>
           <Card.Text as="div" style={{color:'red', fontWeight:"bold"}}> pkr {item.price}</Card.Text> 
            <br></br>

        <Button style={{ marginTop:8,backgroundColor:"#33292A", height:29, textAlign:"center", borderRadius: 0 , marginTop:0}}><h6 className='my-auto'>add to cart</h6></Button>
            

        </Card.Body>
    </Card>
  )
 
}

export default ShopItem