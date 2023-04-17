import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import News from "./pages/News";
import Class from "./pages/Class";
import Admin from "./pages/Admin";

export default function RouteSwitch() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Main /> }></Route>
                <Route path="/Naujienos" element={ <News /> }></Route>
                <Route path="/Klase" element={ <Class /> }></Route>
                <Route path="/Admin" element={ <Admin /> }></Route>
            </Routes>
        </BrowserRouter>
    )
}