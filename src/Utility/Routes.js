import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home"
const RouterComponent = () =>{
    return(
        <BrowserRouter>
        <Routes>
              <Route path='/'  element={<Home />}/>
        </Routes>
        </BrowserRouter>
    )
}
export default RouterComponent;