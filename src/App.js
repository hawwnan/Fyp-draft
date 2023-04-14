import "./App.css";
import HomePage from "./screens/HomePage";
import Login from "./screens/Login";
import Formss from "./components/Formss";
import Payment from "../src/screens/Payment";
import Signup from "./screens/Signup";
import Locate from "./screens/Locate";
import Aboutus from "./screens/Aboutus";
import Placed from "./screens/Placed";
import Information from "./screens/Information";
import Delivery from "./screens/Delivery";
import Confirm from "./screens/Confirm";
import Cart from "./screens/Cart";
import UserProfile from "./screens/UserProfile";
import Clinics from "./screens/Clinics";
import Groomers from "./screens/Groomers";
import FindPet from "./screens/FindPet";
import Shop from "./screens/Shop";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div style={{ backgroundColor: "#F5EBE0" }}>
      {/* <HomePage/> */}
      {/* <Login /> */}
      {/* <Formss /> */}
      {/* <Payment/> */}
      {/* <Signup /> */}

      <Routes>
                 <Route exact path='/' element={< HomePage />}></Route>
                 <Route exact path='/aboutus' element={< Aboutus />}></Route>
                 <Route exact path='/cart/:id?' element={<Cart />}></Route>
                 <Route exact path='/clinics' element={< Clinics />}></Route>
                 <Route exact path='/confirm' element={<Confirm />}></Route>
                 <Route exact path='/delivery' element={<Delivery />}></Route>
                 <Route exact path='/findpet' element={<FindPet />}></Route>
                 <Route exact path='/groomers' element={< Groomers />}></Route>
                 <Route exact path='/product/:id' element={<Information />}></Route>
                 <Route exact path='/locate' element={< Locate />}></Route>
                 <Route exact path='/login' element={<Login />}></Route>
                 <Route exact path='/payment' element={<Payment/>}></Route>
                 <Route exact path='/placed' element={<Placed/>}></Route>
                 <Route exact path='/userprofile' element={<UserProfile />}></Route>
                 <Route exact path='/shop' element={<Shop/>}></Route>
                 <Route exact path='/signup' element={<Signup/>}></Route>
          </Routes>

       {/* <Placed/>
      <Payment/>
      <Delivery/> */}
      {/*
       <Information/> 
   
      <Confirm/>
      <Cart/> */}
      {/* <UserProfile/>
      <Clinics/>
      <Groomers/>
      <FindPet/>

      <Shop/> */}

      {/* <Locate/> */}
      {/* <Aboutus/> */}
      {/* <ShopItems/> */}
    </div>
    </Router>
  );
}

export default App;
