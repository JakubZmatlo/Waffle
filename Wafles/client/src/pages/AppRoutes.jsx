import {BrowserRouter, Routes, Route} from "react-router-dom"; 


import Home from "./Home";
import CreateHuman from "./CreateHuman";
import CreatedHuman from "./CreatedHuman";
import PeopleList from "./PeopleList";
import Human from "./Human";
import Createwafle from "./CreateWafles";


export default function AppRoutes() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create-human" element={<CreateHuman />} />
                <Route path="/created-human/:id" element={<CreatedHuman />} />
                <Route path="/people" element={<PeopleList />} />
                <Route path="/human/:id" element={<Human />} />
                <Route path="/create-wafles" element={<Createwafle />} />
                
            </Routes>
        </BrowserRouter>
    </>
  )
}
