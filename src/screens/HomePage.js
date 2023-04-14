import React from "react";
import { useEffect} from 'react'
// import Topbar from "../components/Topbar";
// import products from "../products";
import { Row, Col, Container } from "react-bootstrap";
import Products from "../components/Products";
import BottomBar from "../components/BottomBar";
import Reviews from "../components/Reviews";
import reviews from "../reviews";
import Locatenav from "../components/Locatenav";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import {listProducts} from '../actions/productActions'

//import axios from 'axios'

import "../my.css";
function HomePage() {

  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const {error, loading, products} = productList

  //const [products, setProducts] = useState([])

  //useEffect get triggers everytime the component is loaded or when state is updated
  useEffect(() => {

       dispatch(listProducts())
    // async function fetchProducts(){
    //   const {data} = await axios.get('/api/products/')
    //   setProducts(data)
    // }

    // fetchProducts()
    //in order to use await wrap the entire function in async
      
  }, [dispatch])
  //bracket at end means we only want useEffect to get triggered when componenet is loaded not when state is updated

  
  return (
    <div>
      <div className="bg1" style={{ position: "relative" }}>
        <Locatenav />
        <div className="paws">
          <p>paws & claws</p>
          <br />
          <p style={{ fontSize: "30px" }}>
            Making your pet, a SuperHero!
          </p>
        </div>
        <Container>
          <div
            style={{
              backgroundColor: "#F5EBE0",
              width: "90%",
              margin: "auto",
              posiiton: "relative",
            }}
          >
            <p
              style={{
                textAlign: "center",
                fontSize: "25px",
                fontWeight: "bold",
              }}
              className="pt-3"
            >
              featured items
            </p>
            {loading ? <Loader/>
               : error ? <Message variant='danger'>{error}</Message>  
               : <Row className="px-5">
                  {products.slice(0,4).map((product) => (
                      <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                          <Products product={product} />
                      </Col>
               ))}
             
                 
                 <Link to="/shop" style={{textDecoration:"none", 
                   color: "black",
                   bottom: "0",
                   left:"1200px",
                   position: "absolute",}}><em>view all products </em></Link>
                 
             </Row>
          }
           
          </div>
        </Container>
      </div>

      <div style={{ backgroundColor: "#F5EBE0" }} className="my-5 fontt">
        <Container>
          <div
            style={{ backgroundColor: "#877B72", width: "90%", margin: "auto" }}
          >
            <p
              style={{
                textAlign: "center",
                fontSize: "25px",
                fontWeight: "bold",
              }}
              className="pt-3"
            >
              reviews
            </p>
            <Row className="px-5">
              {reviews.map((review) => (
                <Col sm={12} md={6} lg={4} xl={4}>
                  <Reviews review={review} />
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
      <div>
        <BottomBar />
      </div>
    </div>
  );
}

export default HomePage;
