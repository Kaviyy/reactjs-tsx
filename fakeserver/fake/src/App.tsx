import Signup from "./Components/Signup";
import Home from "./Components/Home";
import Product from "./Components/Product";
import Login from "./Components/Login";
import Content from "./Components/Content";
import {BrowserRouter as Router,Routes, Route,Link} from "react-router-dom"
import Productdetails from "./Components/Productdetails";
import ProductList from "./Components/ProductList";
import "bootstrap/dist/css/bootstrap.min.css";


function App(){
  let user="alagii"
  return(
    <div className="App">
      
      <Router>
      <ol>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to={`/login/${user}`}>login</Link></li>
        <li><Link to="/sign-up">Signup</Link></li>
        <li><Link to="/content">Content</Link></li>
      </ol>
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
        </Routes>
      </Router>
    </div>
  );
    
}
export default App;