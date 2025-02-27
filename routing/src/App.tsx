import Signup from "./Components/Signup";
import Home from "./Components/Home";
import Product from "./Components/Product";
import Login from "./Components/Login";
import Content from "./Components/Content";
import {BrowserRouter as Router,Routes, Route,Link} from "react-router-dom"
import Productdetails from "./Components/Productdetails";
import ProductList from "./Components/ProductList";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/Navbar";
import Notfound from "./Components/Notfound";
import NewProducts from "./Components/NewProducts";


function App(){
  let user="alagii"
  return(
    <div className="App">
      
      <Router>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Product/>}>
          <Route index element={<ProductList/>}/>
          <Route path="list" element={<ProductList/>}/>
          <Route path="details" element={<Productdetails/>}/>
          </Route>
          <Route path="/login/:user" element={<Login/>}/>
          <Route path="/sign-up" element={<Signup/>}/>
          <Route path="/content" element={<Content/>}/>
          <Route path="/newProducts" element={<NewProducts/>}/>
          <Route path="*" element={<Notfound/>}></Route>
        </Routes>
      </Router>
    </div>
  );
    
}
export default App;