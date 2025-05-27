import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Createwafle from "./CreateWafles";
import WafleListCell from "./WafleList/WafleListCell";
import CreatedWafles from "./CreatedWafles";
import OrdersList from "./Orders";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
import Menu from "./Menu";


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-wafles" element={<Createwafle />} />
        <Route path="/wafles" element={<WafleListCell />} />
        <Route path="/created-wafle/:id" element={<CreatedWafles />} />
        <Route path="/orders" element={<OrdersList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Menu" element={<Menu />} />
        
      </Routes>
    </BrowserRouter>
  );
}