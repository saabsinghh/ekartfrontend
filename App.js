// import Product from "./pages/Product";
 //import Products from "./components/Product";
 import Home from "./pages/Home";
 import ProductList from "./pages/ProductList";
// import Register from "./pages/Register";
 import Login from "./pages/Login";
// import Cart from "./pages/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//import Products from "./components/Products";
//import { Home}  from "@material-ui/icons";
import ProductList2 from "./pages/ProductList2";
import ProductList3 from "./pages/ProductList3";
import Cart from "./pages/Cart";

const App = () => {
  return  <BrowserRouter>
  //       <Routes>
  //         <Route path="/" element={<Home />} />
  //         <Route path="/ProductList" element={<ProductList />} />
  //         <Route path="/ProductList2" element={<ProductList2 />} />
             <Route path="/ProductList3" element={<ProductList3 />} />
             <Route path="/Login" element={<Login/>} />
             <Route path="/Cart" element={<Cart/>} />
  //       </Routes>
  //     </BrowserRouter>;
};

export default App;