import React from "react";
import {Link} from 'react-router-dom'
// import { Card } from 'react-bootstrap'
// import { useParams } from 'react-router-dom'
// function Products({product}) {
//     // const {id} = useParams()
//   return (
//     <Card className="my-3 p-3 rounded">
//       <a href={`/products/${product._id}`}>
//         <Card.Img src={product.image} />
//       </a>
//       <Card.Body>
//         <a href={`/products/${product._id}`}>
//           <Card.Title as='div'>
//             <strong>
//                 {product.name}
//             </strong>
//           </Card.Title>
//         </a>
//         <Card.Text as='div'>
//             <div className='my-3'>
//                 {product.rating}
//             </div>
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   );
// }

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import Rating from "./Rating";
function Products({ product }) {
  return (
    //    <Container fluid>
    //     <a href={`/products/${product._id}`} style={{ textDecoration: "none" }}>
    //       <Card style={{ width: "5 rem"}}>
    //         <Card.Img variant="top" src={product.image} />
    //         <Card.Body>
    //           <Card.Title>{product.name}</Card.Title>
    //           <Card.Text>{product.rating}</Card.Text>
    //         </Card.Body>
    //       </Card>
    //     </a>
    // </Container>
    <Card className="my-4 p-3 ">
      {/* style={{border:"1px solid white", borderRadius:"5px", backgroundColor:'white' , width:"30%",height:"45%"}} */}

      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} />
      </Link>
      <Card.Body style={{ textAlign: "center" }}>
        <Card.Title as="div">
          <p style={{ fontWeight: "bold" }}>{product.name}</p>
        </Card.Title>
        <Card.Text as="div" style={{ color: "red", fontWeight: "bold" }}>
          {" "}
          pkr {product.price}
        </Card.Text>
        <Card.Text as='div' >
            <div className="my-3">
              <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'}/>

            </div>
        </Card.Text>
        <br></br>


        <Button
          style={{
            marginTop: 8,
            backgroundColor: "#33292A",
            height: 29,
            textAlign: "center",
            borderRadius: 0,
            borderColor : '#33292A',
            marginTop: 0,
          }}
        >
          <h6 className="my-auto">add to cart</h6>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Products;
